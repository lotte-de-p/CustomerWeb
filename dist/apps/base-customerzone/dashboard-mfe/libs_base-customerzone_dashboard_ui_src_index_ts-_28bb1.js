(self["webpackChunkmybase_dashboard_mfe"] = self["webpackChunkmybase_dashboard_mfe"] || []).push([["libs_base-customerzone_dashboard_ui_src_index_ts-_28bb1"],{

/***/ 98665:
/*!**********************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressSelectorComponent: () => (/* reexport safe */ _lib_address_selector_address_selector_component__WEBPACK_IMPORTED_MODULE_6__.AddressSelectorComponent),
/* harmony export */   LineSelectorComponent: () => (/* reexport safe */ _lib_line_selector_line_selector_component__WEBPACK_IMPORTED_MODULE_3__.LineSelectorComponent),
/* harmony export */   MyBaseDashboardErrorComponent: () => (/* reexport safe */ _lib_mybase_dashboard_error_mybase_dashboard_error_component__WEBPACK_IMPORTED_MODULE_0__.MyBaseDashboardErrorComponent),
/* harmony export */   MyBaseDashboardHomeNetworkComponent: () => (/* reexport safe */ _lib_mybase_dashboard_home_network_mybase_dashboard_home_network_component__WEBPACK_IMPORTED_MODULE_5__.MyBaseDashboardHomeNetworkComponent),
/* harmony export */   MyBaseNavigationCardsComponent: () => (/* reexport safe */ _lib_mybase_navigation_cards_mybase_navigation_cards_component__WEBPACK_IMPORTED_MODULE_7__.MyBaseNavigationCardsComponent),
/* harmony export */   MyBaseServiceMomentsComponent: () => (/* reexport safe */ _lib_mybase_service_moments_mybase_service_moments_component__WEBPACK_IMPORTED_MODULE_8__.MyBaseServiceMomentsComponent),
/* harmony export */   MyBaseServicesCardsComponent: () => (/* reexport safe */ _lib_mybase_services_cards_mybase_services_cards_component__WEBPACK_IMPORTED_MODULE_9__.MyBaseServicesCardsComponent),
/* harmony export */   MyBaseSimpleCardComponent: () => (/* reexport safe */ _lib_mybase_simple_card_mybase_simple_card_component__WEBPACK_IMPORTED_MODULE_2__.MyBaseSimpleCardComponent),
/* harmony export */   PhoneNumberPipe: () => (/* reexport safe */ _lib_phone_number_phone_number_pipe__WEBPACK_IMPORTED_MODULE_1__.PhoneNumberPipe),
/* harmony export */   ProgressBarComponent: () => (/* reexport safe */ _lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarComponent),
/* harmony export */   ProgressBarStatus: () => (/* reexport safe */ _lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarStatus)
/* harmony export */ });
/* harmony import */ var _lib_mybase_dashboard_error_mybase_dashboard_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mybase-dashboard-error/mybase-dashboard-error.component */ 56135);
/* harmony import */ var _lib_phone_number_phone_number_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/phone-number/phone-number.pipe */ 71998);
/* harmony import */ var _lib_mybase_simple_card_mybase_simple_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mybase-simple-card/mybase-simple-card.component */ 15658);
/* harmony import */ var _lib_line_selector_line_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/line-selector/line-selector.component */ 12481);
/* harmony import */ var _lib_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/progress-bar/progress-bar.component */ 76947);
/* harmony import */ var _lib_mybase_dashboard_home_network_mybase_dashboard_home_network_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/mybase-dashboard-home-network/mybase-dashboard-home-network.component */ 51403);
/* harmony import */ var _lib_address_selector_address_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/address-selector/address-selector.component */ 41324);
/* harmony import */ var _lib_mybase_navigation_cards_mybase_navigation_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/mybase-navigation-cards/mybase-navigation-cards.component */ 15856);
/* harmony import */ var _lib_mybase_service_moments_mybase_service_moments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/mybase-service-moments/mybase-service-moments.component */ 14403);
/* harmony import */ var _lib_mybase_services_cards_mybase_services_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/mybase-services-cards/mybase-services-cards.component */ 6254);











/***/ }),

/***/ 41324:
/*!****************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/address-selector/address-selector.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressSelectorComponent: () => (/* binding */ AddressSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slide-menu/slide-menu.component */ 51830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__);








const _forTrack0 = ($index, $item) => $item.productIdentifier;
function AddressSelectorComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressSelectorComponent_Conditional_4_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.slideMenu(true, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.mybase-dashboard-internet.line-selector.open-button"), " ");
  }
}
function AddressSelectorComponent_For_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c1 = a0 => ({
  "border--b--r border-width--b--r border-style--b--solid border-color--b--light-grey": a0
});
function AddressSelectorComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddressSelectorComponent_For_8_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const line_r4 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.selectLine(line_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddressSelectorComponent_For_8_Conditional_7_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const line_r4 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const $count_r7 = ctx.$count;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, !($index_r5 === $count_r7 - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r4.completeAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](7, line_r4.productIdentifier === (ctx_r1.selectedInternetAddress == null ? null : ctx_r1.selectedInternetAddress.productIdentifier) ? 7 : -1);
  }
}
class AddressSelectorComponent {
  selectInternetAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  set data(internetLines) {
    if (internetLines.length !== 0) {
      this.internetLines = internetLines.map(line => ({
        ...line,
        completeAddress: this.getCompleteAddress(line.address)
      }));
      this.selectedInternetAddress = this.internetLines.find(line => line.default) || this.internetLines[0];
      const storedProductIdentifier = window.sessionStorage.getItem(AddressSelectorComponent.SESSION_STORAGE_KEY);
      if (storedProductIdentifier) {
        const matchingLine = this.internetLines.find(line => line.productIdentifier === storedProductIdentifier);
        if (matchingLine) {
          this.selectedInternetAddress = matchingLine;
        }
      } else {
        window.sessionStorage.setItem(AddressSelectorComponent.SESSION_STORAGE_KEY, this.selectedInternetAddress.productIdentifier);
        window.sessionStorage.setItem(AddressSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, this.selectedInternetAddress.address.id);
      }
      this.selectInternetAddress.emit(this.selectedInternetAddress);
    }
  }
  selectedInternetAddress;
  internetLines = [];
  showMenu = false;
  static SESSION_STORAGE_KEY = 'internet-line-selector';
  static ADDRESS_SESSION_STORAGE_KEY = 'address-line-selector';
  selectLine(line) {
    if (line.productIdentifier !== this.selectedInternetAddress?.productIdentifier) {
      this.sendAnalyticsEvent();
      this.selectedInternetAddress = line;
      this.selectInternetAddress.emit(line);
      this.slideMenu(false);
      window.sessionStorage.setItem(AddressSelectorComponent.SESSION_STORAGE_KEY, line.productIdentifier);
      window.sessionStorage.setItem(AddressSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, line.address.id);
    }
  }
  slideMenu(open, event) {
    event?.stopPropagation();
    this.showMenu = open;
    if (open) {
      document.body?.classList.add('position--fixed');
    } else {
      document.body?.classList.remove('position--fixed');
    }
  }
  sendAnalyticsEvent() {
    const analyticsEvent = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerAttributeName.CHANGE_ADDRESS
    };
    this.analyticsData.emit(analyticsEvent);
  }
  getCompleteAddress(address) {
    if (!address.street || !address.houseNumber) {
      return '';
    }
    let completeAddress = address.street.concat(' ').concat(address.houseNumber);
    if (address.subHouseNumber) {
      completeAddress = completeAddress.concat(' ', address.subHouseNumber);
    }
    if (address.boxNumber) {
      completeAddress = completeAddress.concat('/', address.boxNumber);
    }
    if (address.postalCode) {
      completeAddress = completeAddress.concat(', ', address.postalCode);
    }
    if (address.municipality) {
      completeAddress = completeAddress.concat(' ', address.municipality);
    }
    return completeAddress;
  }
  static ɵfac = function AddressSelectorComponent_Factory(t) {
    return new (t || AddressSelectorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AddressSelectorComponent,
    selectors: [["tg-address-selector"]],
    inputs: {
      data: "data"
    },
    outputs: {
      selectInternetAddress: "selectInternetAddress",
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 9,
    vars: 6,
    consts: [["data-cs-mask", "", 1, "mb--l", "mb--m--md"], [1, "display--flex", "align-items--center", "col-12"], [1, "address-selector--title", "mr--xs", "mt--n", "mb--n", "word-break--ellipsis"], ["class", "col-4 p--n"], [3, "showMenu", "title", "closeMenu"], [1, "col-4", "p--n"], [1, "address-selector--open", "text-font-family--t5", "cursor--pointer", "width--fit-content", 3, "click"], [1, "display--flex", "align-items--center", "justify-content--between", "px--m", "address--line", "cursor--pointer", 3, "click"], [1, "display--flex", "align-items--center", "col-12", "py--l", 3, "ngClass"], [1, "icon", "icon-md", "icon-no-size-override", "icon-house", "col-1"], [1, "col-11", "p--n"], [1, "heading--6", "m--n", "display--flex", "justify-content--between"], [1, "ml--xxs", "word-break--ellipsis"], ["class", "ml--s"], [1, "ml--s"], [1, "icon", "icon-md", "icon-no-size-override", "icon-check-shape-filled", "color-brand-primary"], ["class", "display--flex align-items--center justify-content--between px--m address--line cursor--pointer"]],
    template: function AddressSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddressSelectorComponent_Conditional_4_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tg-slide-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMenu", function AddressSelectorComponent_Template_tg_slide_menu_closeMenu_5_listener() {
          return ctx.slideMenu(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](7, AddressSelectorComponent_For_8_Template, 8, 5, "div", 16, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedInternetAddress == null ? null : ctx.selectedInternetAddress.completeAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](4, ctx.internetLines.length > 1 ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMenu", ctx.showMenu)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "ng.mybase-dashboard-internet.line-selector.menu-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.internetLines);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_2__.SlideMenuComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".address-selector--title[_ngcontent-%COMP%] {\n  color: white;\n}\n@media only screen and (min-width: 768px) {\n  .address-selector--title[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n.address-selector--open[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 2px solid white;\n  font-size: 16px;\n  line-height: 14px;\n  font-weight: 700;\n}\n@media only screen and (min-width: 768px) {\n  .address-selector--open[_ngcontent-%COMP%] {\n    color: #00807b;\n    border-bottom: 2px solid #00807b;\n    font-size: 18px;\n    line-height: 14px;\n  }\n}\n.address-selector--product[_ngcontent-%COMP%] {\n  color: white;\n}\n@media only screen and (min-width: 768px) {\n  .address-selector--product[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n\n.address--line[_ngcontent-%COMP%] {\n  transition: background-color 0.4s ease-in-out;\n}\n.address--line[_ngcontent-%COMP%]:hover {\n  background-color: rgba(17, 17, 17, 0.04);\n}\n.address--line[_ngcontent-%COMP%]:active, .address--line[_ngcontent-%COMP%]:focus {\n  background-color: rgba(17, 17, 17, 0.08);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvYWRkcmVzcy1zZWxlY3Rvci9hZGRyZXNzLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKO0FBQ0k7RUFGRjtJQUdJLGNBQUE7RUFFSjtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUk7RUFQRjtJQVFJLGNBQUE7SUFDQSxnQ0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUdKO0FBQ0Y7QUFERTtFQUNFLFlBQUE7QUFHSjtBQUZJO0VBRkY7SUFHSSxjQUFBO0VBS0o7QUFDRjs7QUFEQTtFQUNFLDZDQUFBO0FBSUY7QUFIRTtFQUNFLHdDQUFBO0FBS0o7QUFIRTtFQUVFLHdDQUFBO0FBSUoiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkcmVzcy1zZWxlY3RvciB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgfVxuICB9XG4gICYtLW9wZW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBjb2xvcjogIzAwODA3YjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4MDdiO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgfVxuICB9XG4gICYtLXByb2R1Y3Qge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBjb2xvcjogaW5pdGlhbDtcbiAgICB9XG4gIH1cbn1cblxuLmFkZHJlc3MtLWxpbmUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzExMTExMSwgMDQlKTtcbiAgfVxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTExMTExLCAwOCUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 12481:
/*!**********************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/line-selector/line-selector.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineSelectorComponent: () => (/* binding */ LineSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slide-menu/slide-menu.component */ 51830);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phone_number_phone_number_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../phone-number/phone-number.pipe */ 71998);









const _forTrack0 = ($index, $item) => $item.msisdn;
function LineSelectorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedMsisdn == null ? null : ctx_r0.selectedMsisdn.simAlias, " \u2022 ");
  }
}
function LineSelectorComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LineSelectorComponent_Conditional_6_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.slideMenu(true, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.mybase-dashboard-mobile.line-selector.open-button"), " ");
  }
}
function LineSelectorComponent_For_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", line_r5.simAlias, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, line_r5.msisdn));
  }
}
function LineSelectorComponent_For_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "phoneNumber");
  }
  if (rf & 2) {
    const line_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, line_r5.msisdn), " ");
  }
}
function LineSelectorComponent_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
  }
}
const _c1 = a0 => ({
  "border--b--r border-width--b--r border-style--b--solid border-color--b--light-grey": a0
});
const _c2 = (a0, a1) => ({
  "icon-sim-card": a0,
  "icon-mobile": a1
});
function LineSelectorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LineSelectorComponent_For_10_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const line_r5 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.selectLine(line_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LineSelectorComponent_For_10_Conditional_6_Template, 4, 4, "div", 13)(7, LineSelectorComponent_For_10_Conditional_7_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LineSelectorComponent_For_10_Conditional_8_Template, 1, 0, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const line_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const $count_r8 = ctx.$count;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, !($index_r6 === $count_r8 - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c2, line_r5.dataOnly, !line_r5.dataOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, line_r5.simAlias ? 6 : 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](8, line_r5.msisdn === (ctx_r2.selectedMsisdn == null ? null : ctx_r2.selectedMsisdn.msisdn) ? 8 : -1);
  }
}
class LineSelectorComponent {
  selectMsisdn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  set data(mobileLines) {
    if (mobileLines.length !== 0) {
      this.mobileLines = mobileLines;
      this.selectedMsisdn = mobileLines.find(line => line.default) || mobileLines[0];
      const storedMsisdn = window.sessionStorage.getItem(LineSelectorComponent.SESSION_STORAGE_KEY);
      if (storedMsisdn) {
        const matchingLine = mobileLines.find(line => line.msisdn === storedMsisdn);
        if (matchingLine) {
          this.selectedMsisdn = matchingLine;
        }
      } else {
        window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, this.selectedMsisdn.msisdn);
        window.sessionStorage.setItem(LineSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, this.selectedMsisdn.addressId);
      }
      this.selectMsisdn.emit(this.selectedMsisdn);
    }
  }
  selectedMsisdn;
  mobileLines = [];
  showMenu = false;
  static SESSION_STORAGE_KEY = 'mobile-line-selector';
  static ADDRESS_SESSION_STORAGE_KEY = 'address-line-selector';
  selectLine(line) {
    if (line.msisdn !== this.selectedMsisdn?.msisdn) {
      this.sendAnalyticsEvent();
      this.selectedMsisdn = line;
      this.selectMsisdn.emit(line);
      this.slideMenu(false);
      window.sessionStorage.setItem(LineSelectorComponent.SESSION_STORAGE_KEY, line.msisdn);
      window.sessionStorage.setItem(LineSelectorComponent.ADDRESS_SESSION_STORAGE_KEY, line.addressId);
    }
  }
  slideMenu(open, event) {
    event?.stopPropagation();
    this.showMenu = open;
    if (open) {
      document.body?.classList.add('position--fixed');
    } else {
      document.body?.classList.remove('position--fixed');
    }
  }
  sendAnalyticsEvent() {
    const analyticsEvent = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.BUTTON_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerAttributeName.CHANGE_LINE
    };
    this.analyticsData.emit(analyticsEvent);
  }
  static ɵfac = function LineSelectorComponent_Factory(t) {
    return new (t || LineSelectorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LineSelectorComponent,
    selectors: [["tg-line-selector"]],
    inputs: {
      data: "data"
    },
    outputs: {
      selectMsisdn: "selectMsisdn",
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 9,
    consts: [["data-cs-mask", "", 1, "mb--l", "mb--m--md"], [1, "display--flex", "align-items--center"], [1, "line-selector--title", "mr--m", "mt--n", "mb--n", "word-break--ellipsis"], ["class", "col-4 p--n"], [3, "showMenu", "title", "closeMenu"], [1, "col-4", "p--n"], [1, "line-selector--open", "text-font-family--t5", "cursor--pointer", "width--fit-content", 3, "click"], [1, "display--flex", "align-items--center", "justify-content--between", "px--m", "mobile--line", "cursor--pointer", 3, "click"], [1, "display--flex", "align-items--center", "col-12", "py--l", 3, "ngClass"], [1, "icon", "icon-md", "icon-no-size-override", "col-1", 3, "ngClass"], [1, "col-11", "p--n"], [1, "heading--6", "m--n", "display--flex", "justify-content--between", "align-items--center"], [1, "ml--xxs"], ["class", "text-flow text-flow--detail color-shade_72 m--n"], ["class", "icon icon-md icon-no-size-override icon-check-shape-filled color-brand-primary"], [1, "text-flow", "text-flow--detail", "color-shade_72", "m--n"], [1, "icon", "icon-md", "icon-no-size-override", "icon-check-shape-filled", "color-brand-primary"], ["class", "display--flex align-items--center justify-content--between px--m mobile--line cursor--pointer"]],
    template: function LineSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LineSelectorComponent_Conditional_3_Template, 1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "phoneNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LineSelectorComponent_Conditional_6_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tg-slide-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeMenu", function LineSelectorComponent_Template_tg_slide_menu_closeMenu_7_listener() {
          return ctx.slideMenu(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](9, LineSelectorComponent_For_10_Template, 9, 9, "div", 17, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](3, (ctx.selectedMsisdn == null ? null : ctx.selectedMsisdn.simAlias) ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, ctx.selectedMsisdn == null ? null : ctx.selectedMsisdn.msisdn), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](6, ctx.mobileLines.length > 1 ? 6 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showMenu", ctx.showMenu)("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "ng.mybase-dashboard-mobile.line-selector.menu-title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.mobileLines);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _slide_menu_slide_menu_component__WEBPACK_IMPORTED_MODULE_3__.SlideMenuComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _phone_number_phone_number_pipe__WEBPACK_IMPORTED_MODULE_5__.PhoneNumberPipe],
    styles: [".line-selector--title[_ngcontent-%COMP%] {\n  color: white;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--title[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n.line-selector--open[_ngcontent-%COMP%] {\n  color: white;\n  border-bottom: 2px solid white;\n  font-size: 16px;\n  line-height: 14px;\n  font-weight: 700;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--open[_ngcontent-%COMP%] {\n    color: initial;\n    border-bottom: 2px solid;\n    font-size: 18px;\n    line-height: 14px;\n  }\n}\n.line-selector--product[_ngcontent-%COMP%] {\n  color: white;\n}\n@media only screen and (min-width: 768px) {\n  .line-selector--product[_ngcontent-%COMP%] {\n    color: initial;\n  }\n}\n\n.mobile--line[_ngcontent-%COMP%] {\n  transition: background-color 0.4s ease-in-out;\n}\n.mobile--line[_ngcontent-%COMP%]:hover {\n  background-color: rgba(17, 17, 17, 0.04);\n}\n.mobile--line[_ngcontent-%COMP%]:active, .mobile--line[_ngcontent-%COMP%]:focus {\n  background-color: rgba(17, 17, 17, 0.08);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvbGluZS1zZWxlY3Rvci9saW5lLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKO0FBQ0k7RUFGRjtJQUdJLGNBQUE7RUFFSjtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUk7RUFQRjtJQVFJLGNBQUE7SUFDQSx3QkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUdKO0FBQ0Y7QUFERTtFQUNFLFlBQUE7QUFHSjtBQUZJO0VBRkY7SUFHSSxjQUFBO0VBS0o7QUFDRjs7QUFEQTtFQUNFLDZDQUFBO0FBSUY7QUFIRTtFQUNFLHdDQUFBO0FBS0o7QUFIRTtFQUVFLHdDQUFBO0FBSUoiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZS1zZWxlY3RvciB7XG4gICYtLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgfVxuICB9XG4gICYtLW9wZW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBjb2xvcjogaW5pdGlhbDtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIH1cbiAgfVxuICAmLS1wcm9kdWN0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgY29sb3I6IGluaXRpYWw7XG4gICAgfVxuICB9XG59XG5cbi5tb2JpbGUtLWxpbmUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzExMTExMSwgMDQlKTtcbiAgfVxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMTExMTExLCAwOCUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56135:
/*!****************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/mybase-dashboard-error/mybase-dashboard-error.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardErrorComponent: () => (/* binding */ MyBaseDashboardErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function MyBaseDashboardErrorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.error) || ctx_r0.error);
  }
}
class MyBaseDashboardErrorComponent {
  error;
  static ɵfac = function MyBaseDashboardErrorComponent_Factory(t) {
    return new (t || MyBaseDashboardErrorComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MyBaseDashboardErrorComponent,
    selectors: [["tg-mybase-dashboard-error"]],
    inputs: {
      error: "error"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "notification", "notification--errorfield", "notification--errorfield--flow"], [1, "icon-error"]],
    template: function MyBaseDashboardErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyBaseDashboardErrorComponent_Conditional_2_Template, 3, 3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](2, ctx.error ? 2 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 51403:
/*!******************************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/mybase-dashboard-home-network/mybase-dashboard-home-network.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseDashboardHomeNetworkComponent: () => (/* binding */ MyBaseDashboardHomeNetworkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__);








const _c0 = a0 => ({
  "mt--l--md": a0
});
class MyBaseDashboardHomeNetworkComponent {
  homeNetworkUrl;
  wifiPassportUrl;
  componentPrefix;
  marginTop = true;
  isLevel1 = true;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService);
  ngOnInit() {
    if (this.isLevel1) {
      this.sendAnalyticsData(false);
    }
  }
  goToHomeNetwork() {
    this.sendAnalyticsData(true, this.homeNetworkUrl);
    this.urlService.redirectTo(this.homeNetworkUrl);
  }
  goToWifiPassport() {
    this.sendAnalyticsData(true, this.wifiPassportUrl, true);
    this.urlService.redirectTo(this.wifiPassportUrl);
  }
  sendAnalyticsData(isClick, destinationUrl, isShareButtonClicked) {
    const myBaseDashbaordAnalyticsData = {
      eventName: this.getEventName(isClick, isShareButtonClicked),
      eventType: this.getEventType(isClick, isShareButtonClicked),
      attributeName: !isShareButtonClicked ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerAttributeName.HOME_NETWORK : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerAttributeName.SHARE_HOME_NETWORK,
      attributeData: !isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerAttributeData.ALL_GOOD : '',
      destinationUrl: isClick ? destinationUrl : undefined
    };
    this.analyticsData.emit(myBaseDashbaordAnalyticsData);
  }
  getEventName(isClick, isShareButtonClicked) {
    if (isShareButtonClicked) {
      return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventName.BUTTON_CLICKED;
    } else if (isClick) {
      return this.isLevel1 ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventName.CARD_CLICKED;
    }
    return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED;
  }
  getEventType(isClick, isShareButtonClicked) {
    if (isClick) {
      return this.isLevel1 || isShareButtonClicked ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventType.CLICK : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventType.CLICK_CARD;
    }
    return _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_4__.MyBaseDashboardDatalayerEventType.IMPRESSION;
  }
  static ɵfac = function MyBaseDashboardHomeNetworkComponent_Factory(t) {
    return new (t || MyBaseDashboardHomeNetworkComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyBaseDashboardHomeNetworkComponent,
    selectors: [["tg-mybase-dashboard-home-network"]],
    inputs: {
      homeNetworkUrl: "homeNetworkUrl",
      wifiPassportUrl: "wifiPassportUrl",
      componentPrefix: "componentPrefix",
      marginTop: "marginTop",
      isLevel1: "isLevel1"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 10,
    consts: [[1, "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", 3, "ngClass"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override"], [1, "mybase-dashboard--card--content", "display--flex", "flex-direction--column", "justify-content--between", "flex-grow"], [1, ""], [1, "button", "button--secondary", "button--alternate", "button--fullwidth", "cursor--pointer", 3, "click"], [1, "icon", "icon-qr-code-scan", "icon-md", "mr--s", "icon-no-size-override", "font--caption-small"]],
    template: function MyBaseDashboardHomeNetworkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardHomeNetworkComponent_Template_div_click_1_listener() {
          return ctx.goToHomeNetwork();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseDashboardHomeNetworkComponent_Template_button_click_9_listener() {
          return ctx.goToWifiPassport();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.marginTop));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-dashboard-home-network-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.componentPrefix + ".home-network.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.componentPrefix + ".home-network.lbl.share"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    styles: [".mybase-dashboard--card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvbXliYXNlLWRhc2hib2FyZC1ob21lLW5ldHdvcmsvbXliYXNlLWRhc2hib2FyZC1ob21lLW5ldHdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubXliYXNlLWRhc2hib2FyZC0tY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 15856:
/*!******************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/mybase-navigation-cards/mybase-navigation-cards.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseNavigationCardsComponent: () => (/* binding */ MyBaseNavigationCardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_simple_card_mybase_simple_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mybase-simple-card/mybase-simple-card.component */ 15658);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);









function MyBaseNavigationCardsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.mobileTitle);
  }
}
function MyBaseNavigationCardsComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ng.mybase-dashboard-mobile.take-control-usage.title"));
  }
}
function MyBaseNavigationCardsComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "tg-mybase-simple-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cardClicked", function MyBaseNavigationCardsComponent_Conditional_0_For_4_Template_tg_mybase_simple_card_cardClicked_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const card_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.redirectTo(card_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.customClassGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "ng.mybase-dashboard-" + ctx_r3.type + ".navigation-cards.title-" + card_r4))("subtitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, "ng.mybase-dashboard-" + ctx_r3.type + ".navigation-cards.subtitle-" + card_r4))("cypressTag", "mybase-dashboard-" + ctx_r3.type + ".navigation-cards.card-" + card_r4)("iconName", ctx_r3.iconMap[card_r4])("fullHeight", true);
  }
}
function MyBaseNavigationCardsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseNavigationCardsComponent_Conditional_0_Conditional_1_Template, 3, 1, "div", 2)(2, MyBaseNavigationCardsComponent_Conditional_0_Conditional_2_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](3, MyBaseNavigationCardsComponent_Conditional_0_For_4_Template, 4, 10, "div", 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx_r0.mobileTitle ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](2, ctx_r0.showControlUsageTitle ? 2 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.cards);
  }
}
class MyBaseNavigationCardsComponent {
  mobileUsageNotificationUrl;
  voicemailUrl;
  simManagementUrl;
  productOverviewUrl;
  topopUrl;
  topupHistoryUrl;
  internetUsageNotificationUrl;
  speedTestUrl;
  myDeviceUrl;
  devicesUsingNetworkUrl;
  manageContentPacksUrl;
  watchTvOnlineUrl;
  manageYourDeviceUrl;
  addTvBoxUrl;
  productIdentifier;
  mobileTitle;
  customClassGrid;
  mobileUsageDetailsUrl;
  mobileUsageLimitsUrl;
  barringsUrl;
  showControlUsageTitle = false;
  data;
  type;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  cards = [];
  iconMap = {
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MOBILE_USAGE_NOTIFICATIONS]: 'icon-bell',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.VOICEMAIL]: 'icon-voicemail',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SIM_MANAGEMENT]: 'icon-sim-management',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.PRODUCT_OVERVIEW]: 'icon-overview',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP]: 'icon-mobile-arrow-up',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP_HISTORY]: 'icon-euro-arrow-counterclockwise',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.INTERNET_USAGE_NOTIFICATIONS]: 'icon-bell',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SPEEDTEST]: 'icon-gauge',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_PRODUCT]: 'icon-stack',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MY_DEVICE]: '',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.DEVICES_USING_YOUR_NETWORK]: '',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_DEVICE]: '',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.WATCH_TV_ONLINE]: 'icon icon-play',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_CONTENT_PACKS]: 'icon-grid-lg',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.ADD_TV_BOX]: 'icon-tv-box',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_DETAILS]: 'icon-list-blocks',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_LIMITS]: 'icon-mobile-euro',
    [_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.BARRINGS]: 'icon-settings-lines'
  };
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService);
  ngOnChanges() {
    if (this.data) {
      this.updateData();
    }
  }
  redirectTo(card) {
    const url = this.getUrl(card);
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeData: '',
      attributeName: card,
      destinationUrl: url
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(url);
  }
  getUrl(card) {
    switch (card) {
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MOBILE_USAGE_NOTIFICATIONS:
        return this.mobileUsageNotificationUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.VOICEMAIL:
        return this.voicemailUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SIM_MANAGEMENT:
        return this.simManagementUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.PRODUCT_OVERVIEW:
        return this.productOverviewUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP:
        return this.topopUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP_HISTORY:
        return this.topupHistoryUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.INTERNET_USAGE_NOTIFICATIONS:
        return this.internetUsageNotificationUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SPEEDTEST:
        return this.speedTestUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_PRODUCT:
        return this.productOverviewUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MY_DEVICE:
        return this.myDeviceUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.DEVICES_USING_YOUR_NETWORK:
        return this.devicesUsingNetworkUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_CONTENT_PACKS:
        return this.getManageContentPacksUrl();
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.WATCH_TV_ONLINE:
        return this.watchTvOnlineUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_DEVICE:
        return this.manageYourDeviceUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.ADD_TV_BOX:
        return this.addTvBoxUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_DETAILS:
        return this.mobileUsageDetailsUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_LIMITS:
        return this.mobileUsageLimitsUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.BARRINGS:
        return this.barringsUrl;
    }
  }
  updateData() {
    // Only show cards that have a configured URL
    this.cards = this.data.filter(card => {
      switch (card) {
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MOBILE_USAGE_NOTIFICATIONS:
          return !!this.mobileUsageNotificationUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.VOICEMAIL:
          return !!this.voicemailUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SIM_MANAGEMENT:
          return !!this.simManagementUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.PRODUCT_OVERVIEW:
          return !!this.productOverviewUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP:
          return !!this.topopUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.TOPUP_HISTORY:
          return !!this.topupHistoryUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.INTERNET_USAGE_NOTIFICATIONS:
          return !!this.internetUsageNotificationUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.SPEEDTEST:
          return !!this.speedTestUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_PRODUCT:
          return !!this.productOverviewUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MY_DEVICE:
          return !!this.myDeviceUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.DEVICES_USING_YOUR_NETWORK:
          return !!this.devicesUsingNetworkUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_CONTENT_PACKS:
          return !!this.manageContentPacksUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.WATCH_TV_ONLINE:
          return !!this.watchTvOnlineUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.MANAGE_YOUR_DEVICE:
          return !!this.manageYourDeviceUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.ADD_TV_BOX:
          return !!this.addTvBoxUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_DETAILS:
          return !!this.mobileUsageDetailsUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.USAGE_LIMITS:
          return !!this.mobileUsageLimitsUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.NavigationCardType.BARRINGS:
          return !!this.barringsUrl;
        default:
          return false;
      }
    });
  }
  getManageContentPacksUrl() {
    return `${this.manageContentPacksUrl}?item=${this.productIdentifier}&flow=product-options&producttype=dtv`;
  }
  static ɵfac = function MyBaseNavigationCardsComponent_Factory(t) {
    return new (t || MyBaseNavigationCardsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseNavigationCardsComponent,
    selectors: [["tg-mybase-navigation-cards"]],
    inputs: {
      mobileUsageNotificationUrl: "mobileUsageNotificationUrl",
      voicemailUrl: "voicemailUrl",
      simManagementUrl: "simManagementUrl",
      productOverviewUrl: "productOverviewUrl",
      topopUrl: "topopUrl",
      topupHistoryUrl: "topupHistoryUrl",
      internetUsageNotificationUrl: "internetUsageNotificationUrl",
      speedTestUrl: "speedTestUrl",
      myDeviceUrl: "myDeviceUrl",
      devicesUsingNetworkUrl: "devicesUsingNetworkUrl",
      manageContentPacksUrl: "manageContentPacksUrl",
      watchTvOnlineUrl: "watchTvOnlineUrl",
      manageYourDeviceUrl: "manageYourDeviceUrl",
      addTvBoxUrl: "addTvBoxUrl",
      productIdentifier: "productIdentifier",
      mobileTitle: "mobileTitle",
      customClassGrid: "customClassGrid",
      mobileUsageDetailsUrl: "mobileUsageDetailsUrl",
      mobileUsageLimitsUrl: "mobileUsageLimitsUrl",
      barringsUrl: "barringsUrl",
      showControlUsageTitle: "showControlUsageTitle",
      data: "data",
      type: "type"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "row"], [1, "row"], ["class", "col-12 display--flex display--none--md"], ["class", "col-12 mb--s mt--xxl--md mt--m"], [1, "col-12", "display--flex", "display--none--md"], [1, "heading--4", "mb--xs", "mb--m--md", "mt--m"], [1, "col-12", "mb--s", "mt--xxl--md", "mt--m"], [1, "heading--4"], [1, "col-12", "mb--m", "mt--xxxs--md", 3, "ngClass"], [1, "height--full", "display--block", "mb--m", 3, "title", "subtitle", "cypressTag", "iconName", "fullHeight", "cardClicked"], ["class", "col-12 mb--m mt--xxxs--md", 3, "ngClass"]],
    template: function MyBaseNavigationCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBaseNavigationCardsComponent_Conditional_0_Template, 5, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.cards.length > 0 ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _mybase_simple_card_mybase_simple_card_component__WEBPACK_IMPORTED_MODULE_3__.MyBaseSimpleCardComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 14403:
/*!****************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/mybase-service-moments/mybase-service-moments.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseServiceMomentsComponent: () => (/* binding */ MyBaseServiceMomentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);







const _c0 = a0 => ({
  "mb--m": a0
});
function MyBaseServiceMomentsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseServiceMomentsComponent_For_1_Template_div_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const moment_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.redirectTo(moment_r1.url, moment_r1.attributeData, moment_r1.attributeGroup, moment_r1.msisdn));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyBaseServiceMomentsComponent_For_1_Template_div_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const moment_r1 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.redirectTo(moment_r1.url, moment_r1.attributeData, moment_r1.attributeGroup, moment_r1.msisdn));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const moment_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const $count_r4 = ctx.$count;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, !($index_r2 === $count_r4 - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-service-moments-card-" + moment_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", moment_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moment_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-service-moments-card-subtitle-" + moment_r1.subType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moment_r1.subTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-service-moments-card-button-" + moment_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moment_r1.buttonText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-service-moments-card-" + moment_r1.type + "-mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moment_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "mybase-service-moments-card-subtitle-" + moment_r1.subType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moment_r1.subTitle, " ");
  }
}
class MyBaseServiceMomentsComponent {
  translateService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService);
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  datePipe = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe);
  set data(sm) {
    if (sm.length) {
      sm.forEach(moment => {
        switch (moment.type) {
          case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.ServiceMomentsType.SIM_ACTIVATION:
            this.attributeData.push(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM);
            this.mappedServiceMoments.push({
              title: this.translateService.instant('ng.mybase-dashboard.service-moments.sim-activation.title'),
              subTitle: this.translateService.instant('ng.mybase-dashboard.service-moments.sim-activation.subtitle'),
              buttonText: this.translateService.instant('ng.mybase-dashboard.service-moments.sim-activation.button'),
              icon: 'icon-sim-card',
              type: moment.type,
              url: this.simActivationUrl,
              msisdn: moment.msisdn,
              attributeData: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM,
              attributeGroup: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeGroup.ACTIVATE,
              subType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.SubType.SIM_ACTIVATION
            });
            break;
          case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.ServiceMomentsType.ESIM_ACTIVATION:
            this.attributeData.push(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM);
            this.mappedServiceMoments.push({
              title: this.translateService.instant('ng.mybase-dashboard.service-moments.esim-activation.title'),
              subTitle: this.translateService.instant('ng.mybase-dashboard.service-moments.esim-activation.subtitle'),
              buttonText: this.translateService.instant('ng.mybase-dashboard.service-moments.esim-activation.button'),
              icon: 'icon-sim-card',
              type: moment.type,
              url: this.eSimActivationUrl,
              msisdn: moment.msisdn,
              attributeData: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeData.ACTIVATE_SIM,
              attributeGroup: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeGroup.ACTIVATE,
              subType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.SubType.ESIM_ACTIVATION
            });
            break;
          case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.ServiceMomentsType.APPOINTMENT:
            {
              this.attributeData.push(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeData.INSTALLATION_APPOINTMENT);
              let subTitle = this.translateService.instant('ng.mybase-dashboard.service-moments.unplannend-appointment.subtitle');
              let subType = _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.SubType.UNPLANNED_APPOINTMENT;
              if (moment.timeslot) {
                subTitle = this.translateService.instant('ng.mybase-dashboard.service-moments.plannend-appointment.subtitle', {
                  start: this.datePipe.transform(moment?.timeslot?.start, 'dd MMMM yyyy HH:mm'),
                  end: this.datePipe.transform(moment?.timeslot?.end, 'dd MMMM yyyy HH:mm')
                });
                subType = _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.SubType.PLANNED_APPOINTMENT;
              }
              this.mappedServiceMoments.push({
                title: this.translateService.instant('ng.mybase-dashboard.service-moments.appointment.title'),
                subTitle: subTitle,
                buttonText: this.translateService.instant('ng.mybase-dashboard.service-moments.appointment.button'),
                icon: 'icon-calendar',
                type: moment.type,
                url: this.appointmentUrl,
                attributeData: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeData.INSTALLATION_APPOINTMENT,
                attributeGroup: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeGroup.VIEW_DETAILS,
                subType: subType
              });
              break;
            }
          default:
            break;
        }
      });
      // This is done in case we have to show multiple service moments. For now we only show one
      this.attributeData.forEach(data => this.sendAnalytics(data, false));
    }
  }
  simActivationUrl;
  eSimActivationUrl;
  appointmentUrl;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  mappedServiceMoments = [];
  attributeData = [];
  redirectTo(url, attData, attGrp, msisdn) {
    const finalUrl = msisdn ? `${url}?msisdn=${msisdn}` : url;
    this.sendAnalytics(attData, true, attGrp, finalUrl);
    this.urlService.redirectTo(finalUrl);
  }
  sendAnalytics(attributeData, isClick, attributeGroup, destinationUrl) {
    const event = {
      eventName: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerEventName.STATUS_CARD_CLICKED : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerEventName.STATUS_CARD_VIEWED,
      eventType: isClick ? _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerEventType.CLICK : _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerEventType.IMPRESSION,
      attributeData: attributeData,
      attributeName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_3__.MyBaseDashboardDatalayerAttributeName.SERVICE_MOMENT,
      attributeGroup: isClick ? attributeGroup : undefined,
      destinationUrl: destinationUrl
    };
    this.analyticsData.emit(event);
  }
  static ɵfac = function MyBaseServiceMomentsComponent_Factory(t) {
    return new (t || MyBaseServiceMomentsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MyBaseServiceMomentsComponent,
    selectors: [["tg-mybase-service-moments"]],
    inputs: {
      data: "data",
      simActivationUrl: "simActivationUrl",
      eSimActivationUrl: "eSimActivationUrl",
      appointmentUrl: "appointmentUrl"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [[1, "display--none", "display--flex--md", "align-items--center", "p--l", "background-white", "cursor--pointer--hover", 3, "ngClass"], [1, "display--flex", "justify-content--center", "align-items--center", "mr--s", "product-icon"], [1, "icon", "icon-md", "icon-sim-card", "icon-no-size-override", 3, "ngClass"], [1, "display--flex", "flex-grow", "flex-direction--column"], [1, "heading--6", "heading--nomargin"], [1, "font--body-regular", "color-shade_72"], [1, "button", "button--primary", "button--alternate", "button--paynow", 3, "click"], [1, "display--none--md", "mybase-dashboard--card", "p--l--lg", "p--m", "background-white", "mt--l--md", "mb--m"], [1, "display--flex", "cursor--pointer", "justify-content--between", "border--b--r", "border-color--all--light-grey", "border-width--b--r", "border-style--b--solid", "pb--m", "mb--m", 3, "click"], [1, "mybase-dashboard--card--title", "display--flex"], [1, "text-flow", "text-flow--h5"], [1, "icon", "icon-md", "icon-chevron-right", "color-shade_48", "icon-no-size-override", "display--flex", "align-items--center"], [1, "font--body-small", "color-shade_72"]],
    template: function MyBaseServiceMomentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, MyBaseServiceMomentsComponent_For_1_Template, 18, 14, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIndex"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.mappedServiceMoments);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule],
    styles: [".product-icon[_ngcontent-%COMP%] {\n  height: 4.8rem;\n  min-width: 4.8rem;\n  background-color: #b8e2e1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvbXliYXNlLXNlcnZpY2UtbW9tZW50cy9teWJhc2Utc2VydmljZS1tb21lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWljb24ge1xuICBoZWlnaHQ6IDQuOHJlbTtcbiAgbWluLXdpZHRoOiA0LjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGUyZTE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6254:
/*!**************************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/mybase-services-cards/mybase-services-cards.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseServicesCardsComponent: () => (/* binding */ MyBaseServicesCardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mybase-dashboard/data-access */ 20163);
/* harmony import */ var _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mybase_simple_card_mybase_simple_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mybase-simple-card/mybase-simple-card.component */ 15658);









const _c0 = a0 => ({
  "display--block": a0
});
function MyBaseServicesCardsComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "tg-mybase-simple-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cardClicked", function MyBaseServicesCardsComponent_Conditional_0_For_6_Template_tg_mybase_simple_card_cardClicked_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const card_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.redirectTo(card_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const $count_r5 = ctx.$count;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, "ng.mybase-dashboard-" + ctx_r1.type + ".services.title-" + card_r2))("cypressTag", "mybase-dashboard-" + ctx_r1.type + ".services.card-" + card_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, !($index_r3 === $count_r5 - 1)));
  }
}
function MyBaseServicesCardsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](5, MyBaseServicesCardsComponent_Conditional_0_For_6_Template, 3, 7, "div", 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "ng.mybase-dashboard-" + ctx_r0.type + ".services.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r0.cards);
  }
}
class MyBaseServicesCardsComponent {
  payByMobileUrl;
  buyHardwareDiscountUrl;
  easySwitchUrl;
  bestTariffUrl;
  returnDeviceUrl;
  type;
  data;
  analyticsData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  cards = [];
  urlService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService);
  ngOnChanges() {
    this.updateData();
  }
  redirectTo(card) {
    const url = this.getUrl(card);
    const event = {
      eventName: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventName.CARD_CLICKED,
      eventType: _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.MyBaseDashboardDatalayerEventType.CLICK_CARD,
      attributeData: '',
      attributeName: card,
      destinationUrl: url
    };
    this.analyticsData.emit(event);
    this.urlService.redirectTo(url);
  }
  getUrl(card) {
    switch (card) {
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.PAYBYMOBILE:
        return this.payByMobileUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.BUY_HARDWARE_DISCOUNT:
        return this.buyHardwareDiscountUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.EASY_SWITCH:
        return this.easySwitchUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.BEST_TARIFF:
        return this.bestTariffUrl;
      case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.RETURN_DEVICE:
        return this.returnDeviceUrl;
    }
  }
  updateData() {
    // Only show cards that have a configured URL
    this.cards = this.data.filter(card => {
      switch (card) {
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.PAYBYMOBILE:
          return !!this.payByMobileUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.BUY_HARDWARE_DISCOUNT:
          return !!this.buyHardwareDiscountUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.EASY_SWITCH:
          return !!this.easySwitchUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.BEST_TARIFF:
          return !!this.bestTariffUrl;
        case _mybase_dashboard_data_access__WEBPACK_IMPORTED_MODULE_2__.ServiceType.RETURN_DEVICE:
          return !!this.returnDeviceUrl;
        default:
          return false;
      }
    });
  }
  static ɵfac = function MyBaseServicesCardsComponent_Factory(t) {
    return new (t || MyBaseServicesCardsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseServicesCardsComponent,
    selectors: [["tg-mybase-services-cards"]],
    inputs: {
      payByMobileUrl: "payByMobileUrl",
      buyHardwareDiscountUrl: "buyHardwareDiscountUrl",
      easySwitchUrl: "easySwitchUrl",
      bestTariffUrl: "bestTariffUrl",
      returnDeviceUrl: "returnDeviceUrl",
      type: "type",
      data: "data"
    },
    outputs: {
      analyticsData: "analyticsData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "row"], [1, "row"], [1, "col-12", "mb--xs", "mb--m--md", "mt--xxl--md", "mt--l"], [1, "heading--4"], [1, "col-12", "col-md-6", "col-lg-4", "mb--m"], [3, "title", "cypressTag", "ngClass", "cardClicked"], ["class", "col-12 col-md-6 col-lg-4 mb--m"]],
    template: function MyBaseServicesCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyBaseServicesCardsComponent_Conditional_0_Template, 7, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](0, ctx.cards.length > 0 ? 0 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _mybase_simple_card_mybase_simple_card_component__WEBPACK_IMPORTED_MODULE_5__.MyBaseSimpleCardComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 15658:
/*!********************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/mybase-simple-card/mybase-simple-card.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBaseSimpleCardComponent: () => (/* binding */ MyBaseSimpleCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



function MyBaseSimpleCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon icon-md ", ctx_r0.iconName, " icon-no-size-override");
  }
}
function MyBaseSimpleCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.subtitle, " ");
  }
}
const _c0 = a0 => ({
  "height--full": a0
});
const _c1 = (a0, a1) => ({
  "icon-chevron-right": a0,
  "icon-external-link": a1
});
class MyBaseSimpleCardComponent {
  title;
  subtitle = '';
  iconName = '';
  cypressTag = '';
  fullHeight = false;
  isExternalLink = false;
  cardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  static ɵfac = function MyBaseSimpleCardComponent_Factory(t) {
    return new (t || MyBaseSimpleCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MyBaseSimpleCardComponent,
    selectors: [["tg-mybase-simple-card"]],
    inputs: {
      title: "title",
      subtitle: "subtitle",
      iconName: "iconName",
      cypressTag: "cypressTag",
      fullHeight: "fullHeight",
      isExternalLink: "isExternalLink"
    },
    outputs: {
      cardClicked: "cardClicked"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 11,
    consts: [[1, "mybase-simple-card", "display--flex", "align-items--center", "p--m", "p--l--lg", "background-white", "cursor--pointer--hover", 3, "ngClass", "click"], ["class", "display--flex justify-content--center align-items--center mr--s"], [1, "display--flex", "flex-grow", "flex-direction--column"], [1, "heading--6", "heading--nomargin"], ["class", "font--body-small color-shade_72"], [1, "icon", "icon-md", "icon-no-size-override", "color-shade_48", 3, "ngClass"], [1, "display--flex", "justify-content--center", "align-items--center", "mr--s"], [1, "font--body-small", "color-shade_72"]],
    template: function MyBaseSimpleCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyBaseSimpleCardComponent_Template_div_click_0_listener() {
          return ctx.cardClicked.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyBaseSimpleCardComponent_Conditional_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MyBaseSimpleCardComponent_Conditional_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.fullHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", ctx.cypressTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](1, ctx.iconName ? 1 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](5, ctx.subtitle ? 5 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c1, !ctx.isExternalLink, ctx.isExternalLink));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    styles: [".mybase-simple-card[_ngcontent-%COMP%]:hover   .icon.icon-chevron-right[_ngcontent-%COMP%] {\n  color: #00807b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvbXliYXNlLXNpbXBsZS1jYXJkL215YmFzZS1zaW1wbGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGNBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIi5teWJhc2Utc2ltcGxlLWNhcmQge1xuICAmOmhvdmVyIHtcbiAgICAuaWNvbi5pY29uLWNoZXZyb24tcmlnaHQge1xuICAgICAgY29sb3I6ICMwMDgwN2I7IC8vIGNvbG9yKCdicmFuZC1wcmltYXJ5Jyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 56324:
/*!****************************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/phone-number/phone-number-transform.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberTransformService: () => (/* binding */ PhoneNumberTransformService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PhoneNumberTransformService {
  static NATIONAL_MOBILE_NUMBER = /^((0|0032|32|\+32)4\d{8})$/;
  static INTERNATIONAL_NUMBER = /^(\+|00|0)(?:\d ?){6,14}\d$/;
  static NATIONAL_PHONE_NUMBER = /^((0|0032|\+32)\d{8})$/;
  static BASE_PHONE_NUMBER = /^(((0|0032|\+32|032|32)4\d{8})|((00|\+)(?!32)4\d{8})|(4\d{8}))$/;
  transform(phoneNumber) {
    if (PhoneNumberTransformService.NATIONAL_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterNationalPhoneNumber(phoneNumber);
    }
    if (PhoneNumberTransformService.NATIONAL_MOBILE_NUMBER.test(phoneNumber)) {
      return this.filterNationalMobileNumber(phoneNumber);
    }
    if (PhoneNumberTransformService.BASE_PHONE_NUMBER.test(phoneNumber)) {
      return this.filterBasePhoneNumber(phoneNumber);
    }
    return this.filterInternationalNumber(phoneNumber);
  }
  doNormaliseMsisdn(phoneNumber) {
    let transFormedNumber = this.transform(phoneNumber);
    transFormedNumber = transFormedNumber.indexOf('0') !== 0 ? '0' + transFormedNumber : transFormedNumber;
    return transFormedNumber && transFormedNumber.replace(/ /g, '');
  }
  autoFormatPhoneNumber(msisdn) {
    const formattedPhoneNumber = this.doNormaliseMsisdn(msisdn);
    if (!msisdn || !formattedPhoneNumber) {
      return msisdn;
    } else {
      if (this.isValidNationalMobileNumber(formattedPhoneNumber)) {
        return 0 + formattedPhoneNumber.substring(1);
      } else if (this.isValidInternationalNumber(msisdn)) {
        return msisdn;
      }
      return formattedPhoneNumber;
    }
  }
  filterNationalPhoneNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    let zoneCode = '0';
    if (this.contains(numberStart, '0032')) {
      numberStart = numberStart.slice(4, numberStart.length);
    }
    if (this.contains(numberStart, '+32')) {
      numberStart = numberStart.slice(3, numberStart.length);
    }
    if (numberStart[0] === '2' || numberStart[0] === '3') {
      zoneCode += numberStart[0] + ' ';
      numberStart = numberStart.slice(1, numberStart.length);
    }
    return zoneCode + numberStart + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterNationalMobileNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (numberStart.indexOf('0032') === 0) {
      numberStart = '0' + numberStart.slice(4, numberStart.length);
    }
    if (numberStart.indexOf('+32') === 0) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (numberStart.indexOf('32') === 0) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return numberStart + ' ' + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterBasePhoneNumber(phoneNumber) {
    const numberLength = phoneNumber.length;
    let numberStart = phoneNumber.slice(0, numberLength - 6);
    if (this.contains(numberStart, '032')) {
      numberStart = '0' + numberStart.slice(3, numberStart.length);
    }
    if (this.contains(numberStart, '00')) {
      numberStart = '0' + numberStart.slice(2, numberStart.length);
    }
    return numberStart + ' ' + phoneNumber.slice(numberLength - 6, numberLength - 4) + ' ' + phoneNumber.slice(numberLength - 4, numberLength - 2) + ' ' + phoneNumber.slice(numberLength - 2, numberLength);
  }
  filterInternationalNumber(phoneNumber) {
    const numberStart = phoneNumber.slice(0, 2);
    if (this.contains(numberStart, '00')) {
      return '+' + phoneNumber.slice(2, phoneNumber.length);
    }
    return phoneNumber;
  }
  contains(master, test) {
    return master.indexOf(test) > -1;
  }
  isValidNationalMobileNumber(value) {
    return PhoneNumberTransformService.NATIONAL_MOBILE_NUMBER.test(value);
  }
  isValidInternationalNumber(number) {
    const value = number.replace(/[-/\\,\s.]/g, '');
    return PhoneNumberTransformService.INTERNATIONAL_NUMBER.test(value);
  }
  static ɵfac = function PhoneNumberTransformService_Factory(t) {
    return new (t || PhoneNumberTransformService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PhoneNumberTransformService,
    factory: PhoneNumberTransformService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 71998:
/*!***************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/phone-number/phone-number.pipe.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-number-transform.service */ 56324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class PhoneNumberPipe {
  phoneNumberTransformService;
  constructor(phoneNumberTransformService) {
    this.phoneNumberTransformService = phoneNumberTransformService;
  }
  transform(phoneNumber) {
    return this.transFormPhoneNumber(phoneNumber);
  }
  transFormPhoneNumber(phoneNumber) {
    if (!phoneNumber) {
      return '';
    }
    phoneNumber = phoneNumber.trim();
    return this.phoneNumberTransformService.transform(phoneNumber);
  }
  static ɵfac = function PhoneNumberPipe_Factory(t) {
    return new (t || PhoneNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_phone_number_transform_service__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 76947:
/*!********************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/progress-bar/progress-bar.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBarComponent: () => (/* binding */ ProgressBarComponent),
/* harmony export */   ProgressBarStatus: () => (/* binding */ ProgressBarStatus)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



const _c0 = a0 => ({
  width: a0
});
const _c1 = (a0, a1, a2) => ({
  "background-cyan-green": a0,
  "background-notification--warning--light": a1,
  "background-notification--error--light": a2
});
var ProgressBarStatus;
(function (ProgressBarStatus) {
  ProgressBarStatus["OK"] = "ok";
  ProgressBarStatus["WARN"] = "warn";
  ProgressBarStatus["ERROR"] = "error";
})(ProgressBarStatus || (ProgressBarStatus = {}));
class ProgressBarComponent {
  progress = 0;
  barColor = ProgressBarStatus.OK;
  ProgressBarStatus = ProgressBarStatus;
  static ɵfac = function ProgressBarComponent_Factory(t) {
    return new (t || ProgressBarComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProgressBarComponent,
    selectors: [["tg-progress-bar"]],
    inputs: {
      progress: "progress",
      barColor: "barColor"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 9,
    consts: [[1, "mybase-progress-bar", "mb--xxs"], [1, "inner", 3, "ngStyle", "ngClass"]],
    template: function ProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.progress + "%"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c1, ctx.barColor === ctx.ProgressBarStatus.OK, ctx.barColor === ctx.ProgressBarStatus.WARN, ctx.barColor === ctx.ProgressBarStatus.ERROR));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "mybase-dashboard-progress-bar-status-" + ctx.barColor);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgStyle],
    styles: [".mybase-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1.2rem;\n  background-color: #e2e2e2;\n}\n.mybase-progress-bar[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  border-right: solid 0.3rem white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubXliYXNlLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcblxuICAuaW5uZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuM3JlbSB3aGl0ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51830:
/*!****************************************************************************************!*\
  !*** ./libs/base-customerzone/dashboard/ui/src/lib/slide-menu/slide-menu.component.ts ***!
  \****************************************************************************************/
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





const _c0 = a0 => ({
  slide: a0
});
const _c1 = ["*"];
class SlideMenuComponent {
  showMenu;
  title;
  closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  close() {
    this.closeMenu.emit();
  }
  static ɵfac = function SlideMenuComponent_Factory(t) {
    return new (t || SlideMenuComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlideMenuComponent,
    selectors: [["tg-slide-menu"]],
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
    decls: 11,
    vars: 4,
    consts: [[1, "sidebar", 3, "ngClass", "appClickOutside"], [1, "sidebar__menu"], [1, "p--l", "position--top", "position--sticky", "width--full", "background-white"], [1, "sidebar__heading", "display--flex", "align-items--center", "justify-content--end"], ["for", "menu-control", 1, "sidebar__close", "cursor--pointer", 3, "click"], [1, "icon", "icon-cross", "icon-md", "icon-no-size-override"], [1, "sidebar__content", "px--xxs", "pb--l"], [1, "heading--5", "mt--n", "px--m"], [1, "mybase-overlay"]],
    template: function SlideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appClickOutside", function SlideMenuComponent_Template_aside_appClickOutside_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideMenuComponent_Template_div_click_4_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective],
    styles: [".sidebar[_ngcontent-%COMP%] {\n  transform: translatey(100%);\n  overflow-y: scroll;\n  width: 100vw;\n  max-height: 90vh;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 9999;\n  transition: transform 0.4s ease-in-out;\n  background: #fff;\n}\n@media only screen and (min-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    height: 100vh;\n    max-height: initial;\n    overflow-y: auto;\n    width: 35vw;\n    top: 0;\n    right: 0;\n    left: auto;\n    transform: translatex(100%);\n  }\n}\n@media only screen and (min-width: 1192px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n\n.slide.sidebar[_ngcontent-%COMP%] {\n  transform: translatey(0);\n}\n@media only screen and (min-width: 768px) {\n  .slide.sidebar[_ngcontent-%COMP%] {\n    transform: translatex(0);\n  }\n}\n.slide[_ngcontent-%COMP%]    ~ .mybase-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvYmFzZS1jdXN0b21lcnpvbmUvZGFzaGJvYXJkL3VpL3NyYy9saWIvc2xpZGUtbWVudS9zbGlkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQVpGO0lBYUksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7RUFFRjtBQUNGO0FBQUU7RUF2QkY7SUF3QkksV0FBQTtFQUdGO0FBQ0Y7O0FBQ0U7RUFDRSx3QkFBQTtBQUVKO0FBREk7RUFGRjtJQUdJLHdCQUFBO0VBSUo7QUFDRjtBQURFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwMCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogMzV2dztcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMTAwJSk7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTJweCkge1xuICAgIHdpZHRoOiAyNXZ3O1xuICB9XG59XG5cbi5zbGlkZSB7XG4gICYuc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDApO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwKTtcbiAgICB9XG4gIH1cblxuICAmIH4gLm15YmFzZS1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}])
//# sourceMappingURL=libs_base-customerzone_dashboard_ui_src_index_ts-_28bb1.js.map