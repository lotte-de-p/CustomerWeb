(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["apps_marketing_marketing-mfe_src_app_cafe_priced-customer-product-holding_ui_priced-customer--2fac260"],{

/***/ 89804:
/*!*********************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/marketing-cafe-ngxs.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketingCafeNgxsModule: () => (/* binding */ MarketingCafeNgxsModule)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _priced_customer_product_holding_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./priced-customer-product-holding/state/priced-cph.state */ 53384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class MarketingCafeNgxsModule {
  static ɵfac = function MarketingCafeNgxsModule_Factory(t) {
    return new (t || MarketingCafeNgxsModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MarketingCafeNgxsModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_priced_customer_product_holding_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__.PricedCphState])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarketingCafeNgxsModule, {
    imports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵNgxsFeatureModule"]]
  });
})();

/***/ }),

/***/ 59079:
/*!***************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/business-customer.notification.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessCustomerNotification: () => (/* binding */ BusinessCustomerNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/priced-cph.constants */ 79620);
/* harmony import */ var _http_cafe_contact_details_services_cafe_contact_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/cafe/contact-details/services/cafe-contact-details.service */ 51118);





class BusinessCustomerNotification {
  labelKey = 'business-customer';
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.ERROR;
  shouldShow(injector) {
    const cafeContactDetailsService = injector?.get(_http_cafe_contact_details_services_cafe_contact_details_service__WEBPACK_IMPORTED_MODULE_4__.CafeContactDetailsService);
    return cafeContactDetailsService?.getContactDetails(_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_3__.PricedCphConstants.MESSAGE_GROUP).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(cafeContactDetails => cafeContactDetails && cafeContactDetails.isOrganization())) || (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
  }
}

/***/ }),

/***/ 38398:
/*!********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/no-manager.notification.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoManagerNotification: () => (/* binding */ NoManagerNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/priced-cph.state */ 53384);




class NoManagerNotification {
  labelKey = 'no-manager';
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.WARNING;
  shouldShow(injector) {
    const store = injector?.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store);
    const loginDetails = store?.selectSnapshot(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.loginDetails);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(!loginDetails?.hasManagerRole());
  }
}

/***/ }),

/***/ 29263:
/*!*********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/model/no-products.notification.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoProductsNotification: () => (/* binding */ NoProductsNotification)
/* harmony export */ });
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.model */ 80176);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/priced-cph.state */ 53384);




class NoProductsNotification {
  type = _notification_model__WEBPACK_IMPORTED_MODULE_0__.NotificationTypeEnum.ERROR;
  labelKey = 'no-products';
  shouldShow(injector) {
    const store = injector?.get(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store);
    const overview = store?.selectSnapshot(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.overview);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.hasNoProducts(overview));
  }
  hasNoProducts(overview) {
    return !overview || !overview.some(value => value.products && value.products.length > 0);
  }
}

/***/ }),

/***/ 72616:
/*!********************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/notifications.service.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);




class NotificationsService {
  injector;
  constructor(injector) {
    this.injector = injector;
  }
  notificationsIfConditionsMet$(notifications) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(notifications).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(notification => {
      return notification.shouldShow(this.injector).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(shouldShowNotification => shouldShowNotification), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => notification));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
  }
  static ɵfac = function NotificationsService_Factory(t) {
    return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NotificationsService,
    factory: NotificationsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 94227:
/*!***************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/service/priced-cph-datalayer.service.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCphDatalayerService: () => (/* binding */ PricedCphDatalayerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/priced-cph.constants */ 79620);




class PricedCphDatalayerService {
  dataLayerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_1__.DataLayerService);
  category = this.dataLayerService.createCategory('general');
  viewedEventInfo = this.dataLayerService.createEventInfo('Priced product holding banner viewed', 'impression', [_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_2__.PricedCphConstants.MESSAGE_GROUP]);
  openedEventInfo = this.dataLayerService.createEventInfo('Priced product holding banner opened', 'click', [_util_priced_cph_constants__WEBPACK_IMPORTED_MODULE_2__.PricedCphConstants.MESSAGE_GROUP]);
  pushComponentViewed() {
    this.dataLayerService.sendEvent({
      eventInfo: this.viewedEventInfo,
      attributes: {},
      category: this.category
    });
  }
  pushComponentOpened() {
    this.dataLayerService.sendEvent({
      eventInfo: this.openedEventInfo,
      attributes: {},
      category: this.category
    });
  }
  static ɵfac = function PricedCphDatalayerService_Factory(t) {
    return new (t || PricedCphDatalayerService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PricedCphDatalayerService,
    factory: PricedCphDatalayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73255:
/*!*************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/bill-price/bill-price.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillPriceComponent: () => (/* binding */ BillPriceComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








function BillPriceComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BillPriceComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](",", ctx_r1.decimal, "");
  }
}
function BillPriceComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class BillPriceComponent {
  translateHelperService;
  languageService;
  price;
  integer;
  decimal;
  isFrench;
  constructor(translateHelperService, languageService) {
    this.translateHelperService = translateHelperService;
    this.languageService = languageService;
  }
  ngOnInit() {
    const priceArray = this.price.split('.');
    this.integer = priceArray[0];
    this.decimal = priceArray[1];
    this.isFrench = this.languageService.getLanguage() === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum.FR;
  }
  static ɵfac = function BillPriceComponent_Factory(t) {
    return new (t || BillPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__.TranslateHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.LanguageService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BillPriceComponent,
    selectors: [["tg-marketing-cafe-bill-price"]],
    inputs: {
      price: "price"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 12,
    vars: 7,
    consts: [[1, "display--flex", "justify-content--end", "align-items--center", "mt--xl"], [1, "text-block__right", "text-align--right"], [1, "price", "price__total-month-promo-description"], ["class", "line-height--18 text--m text--xm--sm text-font-family--t6 vertical-align--text-top", 4, "ngIf"], [1, "text-font-family--t6", "text--xl--sm"], [1, "text--xs", "text--s--sm"], [1, "whitespace", "whitespace--medium"], [1, "line-height--18", "text--m", "text--xm--sm", "text-font-family--t6", "vertical-align--text-top"]],
    template: function BillPriceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BillPriceComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BillPriceComponent_span_6_Template, 2, 1, "span", 3)(7, BillPriceComponent_span_7_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 6);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isFrench);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.integer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.decimal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isFrench);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 5, ctx.translateHelperService.getText("price-month")));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 59400:
/*!****************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/directives/panel-toggler.directive.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TogglePanelDirective: () => (/* binding */ TogglePanelDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class TogglePanelDirective {
  elRef;
  renderer;
  static CLASS_PANEL_COLLAPSED = 'accordion--panel__collapsed';
  panelClass;
  constructor(elRef, renderer) {
    this.elRef = elRef;
    this.renderer = renderer;
  }
  handleClick() {
    const header = this.elRef.nativeElement;
    const panel = this.panelClass ? header?.parentElement?.querySelector(`.${this.panelClass}`) : this.renderer.nextSibling(header);
    if (panel && !panel.classList.contains(TogglePanelDirective.CLASS_PANEL_COLLAPSED)) {
      this.renderer.addClass(panel, TogglePanelDirective.CLASS_PANEL_COLLAPSED);
      return;
    }
    if (panel && panel.style.maxHeight) {
      this.setHeight(panel, 'scrollHeight');
      requestAnimationFrame(() => {
        this.setHeight(panel, null);
      });
      return;
    }
    this.setHeight(panel, 'scrollHeight');
    const eventHandler = function () {
      if (getComputedStyle(panel).maxHeight !== '0px') {
        panel.style.maxHeight = 'unset';
      }
      panel.removeEventListener('transitionend', eventHandler);
    };
    panel.addEventListener('transitionend', eventHandler);
  }
  setHeight(el, heightProperty) {
    this.renderer.setStyle(el, 'maxHeight', heightProperty ? el[heightProperty] + 'px' : null);
  }
  static ɵfac = function TogglePanelDirective_Factory(t) {
    return new (t || TogglePanelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: TogglePanelDirective,
    selectors: [["", "tgMarketingTogglePanel", ""]],
    hostBindings: function TogglePanelDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TogglePanelDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        });
      }
    },
    inputs: {
      panelClass: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputFlags"].None, "tgMarketingTogglePanel", "panelClass"]
    },
    standalone: true
  });
}

/***/ }),

/***/ 43510:
/*!*************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/disclaimer/disclaimer.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisclaimerComponent: () => (/* binding */ DisclaimerComponent)
/* harmony export */ });
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






function DisclaimerComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisclaimerComponent_span_3_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleShowMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r0.translateHelperService.getText("disclaimer-read-more")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function DisclaimerComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r1.translateHelperService.getText("disclaimer-expanded")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
class DisclaimerComponent {
  translateHelperService;
  showMore;
  constructor(translateHelperService) {
    this.translateHelperService = translateHelperService;
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
  static ɵfac = function DisclaimerComponent_Factory(t) {
    return new (t || DisclaimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__.TranslateHelperService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DisclaimerComponent,
    selectors: [["tg-marketing-cafe-disclaimer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "display--block", "text--xs", "text--s--sm"], [3, "innerHTML"], [3, "innerHTML", "click", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML", "click"]],
    template: function DisclaimerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DisclaimerComponent_span_3_Template, 2, 3, "span", 2)(4, DisclaimerComponent_span_4_Template, 2, 3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx.translateHelperService.getText("disclaimer")), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showMore);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 10662:
/*!*********************************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/drop-down-accordion-header/drop-down-accordion-header.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownAccordionHeaderComponent: () => (/* binding */ DropDownAccordionHeaderComponent)
/* harmony export */ });
/* harmony import */ var _service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/priced-cph-datalayer.service */ 94227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class DropDownAccordionHeaderComponent {
  pricedCphDatalayerService;
  title;
  isPanelCollapsed;
  rotateChevron;
  constructor(pricedCphDatalayerService) {
    this.pricedCphDatalayerService = pricedCphDatalayerService;
  }
  handleClick() {
    this.rotateChevron = !this.rotateChevron;
    if (this.rotateChevron) {
      this.pricedCphDatalayerService.pushComponentOpened();
    }
  }
  static ɵfac = function DropDownAccordionHeaderComponent_Factory(t) {
    return new (t || DropDownAccordionHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_0__.PricedCphDatalayerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DropDownAccordionHeaderComponent,
    selectors: [["tg-marketing-cafe-drop-down-accordion-header"]],
    inputs: {
      title: "title",
      isPanelCollapsed: "isPanelCollapsed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 4,
    consts: [[1, "header-accordion", "heading--5", "cursor--pointer", "user-select--none", "p--l", "m--n", 3, "click"], [1, "header-accordion--title"], [1, "header-accordion--title__text"], [1, "header-accordion--link", "display--flex", "align-items--center"], [1, "icon", "icon-sm", "transition--all-3ms", 3, "ngClass"]],
    template: function DropDownAccordionHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DropDownAccordionHeaderComponent_Template_div_click_0_listener() {
          return ctx.handleClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rotate--180", ctx.rotateChevron);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isPanelCollapsed ? "icon-chevron-down" : "icon-chevron-up");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 78011:
/*!*******************************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/drop-down-accordion-panel/drop-down-accordion-panel.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownAccordionPanelComponent: () => (/* binding */ DropDownAccordionPanelComponent)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _group_overview_group_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group/overview-group-type.enum */ 57191);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/priced-cph.state */ 53384);
/* harmony import */ var _error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error-notification/error-notification.component */ 89144);
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../disclaimer/disclaimer.component */ 43510);
/* harmony import */ var _bill_price_bill_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bill-price/bill-price.component */ 73255);
/* harmony import */ var _group_overview_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../group/overview-group.component */ 46615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../marketing-cafe-ngxs.module */ 89804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











function DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_tg_marketing_cafe_bill_price_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tg-marketing-cafe-bill-price", 7);
  }
  if (rf & 2) {
    const overview_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("price", overview_r4.lastBillPrice);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "tg-marketing-cafe-overview-group", 5)(2, "tg-marketing-cafe-overview-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_tg_marketing_cafe_bill_price_3_Template, 1, 1, "tg-marketing-cafe-bill-price", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const overview_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", overview_r4.products)("type", ctx_r6.overviewGroupTypeEnum.PRODUCTS);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", overview_r4.options)("type", ctx_r6.overviewGroupTypeEnum.OPTIONS);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", overview_r4.lastBillPrice);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_ng_container_1_Template, 4, 5, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const overview_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", overview_r4.products.length > 0);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DropDownAccordionPanelComponent_ng_container_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const overview_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", overview_r4);
  }
}
function DropDownAccordionPanelComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, DropDownAccordionPanelComponent_ng_container_0_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "tg-marketing-cafe-disclaimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.overviews);
  }
}
function DropDownAccordionPanelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "tg-marketing-cafe-error-notification", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("labelKey", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r1.notification).labelKey)("type", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, ctx_r1.notification).type);
  }
}
class DropDownAccordionPanelComponent {
  overviews;
  notification;
  overviewGroupTypeEnum = _group_overview_group_type_enum__WEBPACK_IMPORTED_MODULE_2__.OverviewGroupTypeEnum;
  static ɵfac = function DropDownAccordionPanelComponent_Factory(t) {
    return new (t || DropDownAccordionPanelComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: DropDownAccordionPanelComponent,
    selectors: [["tg-marketing-cafe-drop-down-accordion-panel"]],
    inputs: {
      overviews: "overviews"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[4, "ngIf", "ngIfElse"], ["notificationHandling", ""], [1, "whitespace", "whitespace--medium"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "items", "type"], [3, "price", 4, "ngIf"], [3, "price"], [3, "labelKey", "type"]],
    template: function DropDownAccordionPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, DropDownAccordionPanelComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DropDownAccordionPanelComponent_ng_template_2_Template, 3, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "div", 2);
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx.notification) === null)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgFor, _group_overview_group_component__WEBPACK_IMPORTED_MODULE_7__.OverviewGroupComponent, _bill_price_bill_price_component__WEBPACK_IMPORTED_MODULE_6__.BillPriceComponent, _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__.DisclaimerComponent, _error_notification_error_notification_component__WEBPACK_IMPORTED_MODULE_4__.ErrorNotificationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_9__.MarketingCafeNgxsModule],
    encapsulation: 2
  });
}
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.notification), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], DropDownAccordionPanelComponent.prototype, "notification", void 0);

/***/ }),

/***/ 80697:
/*!*******************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/drop-down-accordion/drop-down-accordion.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropDownAccordionComponent: () => (/* binding */ DropDownAccordionComponent)
/* harmony export */ });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/priced-cph.state */ 53384);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/priced-cph-datalayer.service */ 94227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _drop_down_accordion_panel_drop_down_accordion_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../drop-down-accordion-panel/drop-down-accordion-panel.component */ 78011);
/* harmony import */ var _directives_panel_toggler_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/panel-toggler.directive */ 59400);
/* harmony import */ var _drop_down_accordion_header_drop_down_accordion_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../drop-down-accordion-header/drop-down-accordion-header.component */ 10662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










class DropDownAccordionComponent {
  pricedCphDatalayerService;
  title;
  overviews;
  notification;
  constructor(pricedCphDatalayerService) {
    this.pricedCphDatalayerService = pricedCphDatalayerService;
  }
  ngOnInit() {
    this.pricedCphDatalayerService.pushComponentViewed();
  }
  static ɵfac = function DropDownAccordionComponent_Factory(t) {
    return new (t || DropDownAccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_priced_cph_datalayer_service__WEBPACK_IMPORTED_MODULE_3__.PricedCphDatalayerService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DropDownAccordionComponent,
    selectors: [["tg-marketing-cafe-drop-down-accordion"]],
    inputs: {
      title: "title",
      overviews: "overviews"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [["tgMarketingTogglePanel", "", 3, "title", "isPanelCollapsed"], [1, "display--flex", "flex-direction--column", "flex-grow", "px--l", 3, "overviews"]],
    template: function DropDownAccordionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tg-marketing-cafe-drop-down-accordion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "tg-marketing-cafe-drop-down-accordion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.title)("isPanelCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 5, ctx.notification) === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("accordion--panel__collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 7, ctx.notification) === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("overviews", ctx.overviews);
      }
    },
    dependencies: [_drop_down_accordion_header_drop_down_accordion_header_component__WEBPACK_IMPORTED_MODULE_7__.DropDownAccordionHeaderComponent, _directives_panel_toggler_directive__WEBPACK_IMPORTED_MODULE_6__.TogglePanelDirective, _drop_down_accordion_panel_drop_down_accordion_panel_component__WEBPACK_IMPORTED_MODULE_5__.DropDownAccordionPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    encapsulation: 2
  });
}
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_1__.PricedCphState.notification), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable)], DropDownAccordionComponent.prototype, "notification", void 0);

/***/ }),

/***/ 89144:
/*!*****************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/error-notification/error-notification.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorNotificationComponent: () => (/* binding */ ErrorNotificationComponent)
/* harmony export */ });
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _model_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/notification.model */ 80176);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class ErrorNotificationComponent {
  translateHelperService;
  labelKey;
  type;
  constructor(translateHelperService) {
    this.translateHelperService = translateHelperService;
  }
  getClass() {
    switch (this.type) {
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.ERROR:
        return 'notification--errorfield';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.WARNING:
        return 'notification--warning';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.INFO:
        return 'notification--info';
    }
  }
  getIconClass() {
    switch (this.type) {
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.ERROR:
        return 'icon-error-shape errorfield';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.WARNING:
        return 'icon-alert-shape warning';
      case _model_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationTypeEnum.INFO:
        return 'icon-information-shape info';
    }
  }
  static ɵfac = function ErrorNotificationComponent_Factory(t) {
    return new (t || ErrorNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_0__.TranslateHelperService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ErrorNotificationComponent,
    selectors: [["tg-marketing-cafe-error-notification"]],
    inputs: {
      labelKey: "labelKey",
      type: "type"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 5,
    consts: [[1, "notification", 3, "ngClass"], [1, "icon", 3, "ngClass"]],
    template: function ErrorNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.getClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.getIconClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, ctx.translateHelperService.getText("error." + ctx.labelKey)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 57191:
/*!************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/group/overview-group-type.enum.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewGroupTypeEnum: () => (/* binding */ OverviewGroupTypeEnum)
/* harmony export */ });
var OverviewGroupTypeEnum;
(function (OverviewGroupTypeEnum) {
  OverviewGroupTypeEnum["PRODUCTS"] = "products";
  OverviewGroupTypeEnum["OPTIONS"] = "options";
})(OverviewGroupTypeEnum || (OverviewGroupTypeEnum = {}));

/***/ }),

/***/ 46615:
/*!************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/group/overview-group.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewGroupComponent: () => (/* binding */ OverviewGroupComponent)
/* harmony export */ });
/* harmony import */ var _overview_group_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview-group-type.enum */ 57191);
/* harmony import */ var _service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/translate-helper.service */ 30963);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







function OverviewGroupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r0.translateHelperService.getTitle(ctx_r0.type)), " ");
  }
}
function OverviewGroupComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function OverviewGroupComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
const _c0 = (a0, a1, a2) => ({
  labelKey: a0,
  args: a1,
  icon: a2,
  rowClass: "position--relative",
  class: "ml--xl text--s text--m--sm p--n"
});
function OverviewGroupComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewGroupComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const spec_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](2, _c0, spec_r7.label.key, spec_r7.label.args, spec_r7.icon));
  }
}
const _c1 = (a0, a1, a2) => ({
  labelKey: a0,
  args: a1,
  class: a2
});
function OverviewGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewGroupComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6)(2, OverviewGroupComponent_ng_container_1_ng_container_2_Template, 2, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](3, _c1, ctx_r1.translateHelperService.getLabel(ctx_r1.getLabelKey(item_r4)), ctx_r1.getLabelArgs(item_r4), ctx_r1.type === ctx_r1.overviewGroupTypeEnum.PRODUCTS ? "text--m text--xm--sm" : " text--s text--m--sm p--n"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r4.specifications);
  }
}
function OverviewGroupComponent_ng_template_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const icon_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", icon_r11);
  }
}
function OverviewGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OverviewGroupComponent_ng_template_2_i_1_Template, 1, 1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const labelKey_r9 = ctx.labelKey;
    const args_r10 = ctx.args;
    const icon_r11 = ctx.icon;
    const rowClass_r12 = ctx.rowClass;
    const itemClass_r13 = ctx.class;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", rowClass_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", icon_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", itemClass_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 4, labelKey_r9, args_r10), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
class OverviewGroupComponent {
  translateHelperService;
  items;
  type;
  overviewGroupTypeEnum = _overview_group_type_enum__WEBPACK_IMPORTED_MODULE_0__.OverviewGroupTypeEnum;
  constructor(translateHelperService) {
    this.translateHelperService = translateHelperService;
  }
  getLabelKey(item) {
    return item.amount === 1 ? 'item' : 'item-with-amount';
  }
  getLabelArgs(item) {
    return {
      itemName: item.key,
      amount: item.amount
    };
  }
  static ɵfac = function OverviewGroupComponent_Factory(t) {
    return new (t || OverviewGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_translate_helper_service__WEBPACK_IMPORTED_MODULE_1__.TranslateHelperService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: OverviewGroupComponent,
    selectors: [["tg-marketing-cafe-overview-group"]],
    inputs: {
      items: "items",
      type: "type"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [["class", "display--flex justify-content--between align-items--center heading--6 mb--xxs mt--s", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["record", ""], [1, "display--flex", "justify-content--between", "align-items--center", "heading--6", "mb--xxs", "mt--s"], [1, "text-block__left"], [1, "text-block__right", "display--flex", "align-items--baseline", "word-break--keep-all"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "display--flex", "justify-content--between", "align-content--center", "mb--xxs", 3, "ngClass"], ["class", "position--absolute cursor--pointer text--xxm line-height--20", 3, "ngClass", 4, "ngIf"], [1, "display--flex", "flex-grow", "justify-content--between", "align-items--center", 3, "ngClass"], [1, "text-block__left", 3, "innerHTML"], [1, "position--absolute", "cursor--pointer", "text--xxm", "line-height--20", 3, "ngClass"]],
    template: function OverviewGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, OverviewGroupComponent_div_0_Template, 5, 3, "div", 0)(1, OverviewGroupComponent_ng_container_1_Template, 3, 7, "ng-container", 1)(2, OverviewGroupComponent_ng_template_2_Template, 6, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.items && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 99827:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/cafe/priced-customer-product-holding/ui/priced-customer-product-holding/priced-customer-product-holding.component.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricedCustomerProductHoldingComponent: () => (/* binding */ PricedCustomerProductHoldingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 71943);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/priced-cph.state */ 53384);
/* harmony import */ var _service_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/notifications.service */ 72616);
/* harmony import */ var _model_backend_error_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/backend-error.notification */ 9291);
/* harmony import */ var _model_business_customer_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/business-customer.notification */ 59079);
/* harmony import */ var _model_no_products_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/no-products.notification */ 29263);
/* harmony import */ var _model_no_manager_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/no-manager.notification */ 38398);
/* harmony import */ var _state_priced_cph_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state/priced-cph.actions */ 60672);
/* harmony import */ var _drop_down_accordion_drop_down_accordion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../drop-down-accordion/drop-down-accordion.component */ 80697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../marketing-cafe-ngxs.module */ 89804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















function PricedCustomerProductHoldingComponent_tg_marketing_cafe_drop_down_accordion_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-marketing-cafe-drop-down-accordion", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("title", ctx_r0.title)("overviews", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, ctx_r0.overview$));
  }
}
class PricedCustomerProductHoldingComponent {
  store;
  notificationsService;
  title;
  loginDetails$;
  isLoggedIn$;
  overview$;
  constructor(store, notificationsService) {
    this.store = store;
    this.notificationsService = notificationsService;
  }
  ngOnInit() {
    const NOTIFICATIONS = [new _model_backend_error_notification__WEBPACK_IMPORTED_MODULE_5__.BackendErrorNotification(), new _model_business_customer_notification__WEBPACK_IMPORTED_MODULE_6__.BusinessCustomerNotification(), new _model_no_manager_notification__WEBPACK_IMPORTED_MODULE_8__.NoManagerNotification(), new _model_no_products_notification__WEBPACK_IMPORTED_MODULE_7__.NoProductsNotification()];
    this.store.dispatch(new _state_priced_cph_actions__WEBPACK_IMPORTED_MODULE_9__.Initialize()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(() => this.notificationsService.notificationsIfConditionsMet$(NOTIFICATIONS)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(notification => {
      if (notification) {
        this.store.dispatch(new _state_priced_cph_actions__WEBPACK_IMPORTED_MODULE_9__.SetNotificationIfNotSet(notification));
      }
    })).subscribe();
  }
  static ɵfac = function PricedCustomerProductHoldingComponent_Factory(t) {
    return new (t || PricedCustomerProductHoldingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_service_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: PricedCustomerProductHoldingComponent,
    selectors: [["tg-marketing-cafe-priced-customer-product-holding"]],
    inputs: {
      title: "title"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["class", "Container", 3, "title", "overviews", 4, "ngIf"], [1, "Container", 3, "title", "overviews"]],
    template: function PricedCustomerProductHoldingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PricedCustomerProductHoldingComponent_tg_marketing_cafe_drop_down_accordion_0_Template, 2, 4, "tg-marketing-cafe-drop-down-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx.isLoggedIn$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _drop_down_accordion_drop_down_accordion_component__WEBPACK_IMPORTED_MODULE_10__.DropDownAccordionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _marketing_cafe_ngxs_module__WEBPACK_IMPORTED_MODULE_12__.MarketingCafeNgxsModule],
    encapsulation: 2
  });
}
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.loginDetails), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], PricedCustomerProductHoldingComponent.prototype, "loginDetails$", void 0);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.isLoggedIn), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], PricedCustomerProductHoldingComponent.prototype, "isLoggedIn$", void 0);
__decorate([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Select)(_state_priced_cph_state__WEBPACK_IMPORTED_MODULE_3__.PricedCphState.overview), __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable)], PricedCustomerProductHoldingComponent.prototype, "overview$", void 0);

/***/ }),

/***/ 66137:
/*!**********************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/enums/cafe-contact-detail-type.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetailType: () => (/* binding */ CafeContactDetailType)
/* harmony export */ });
var CafeContactDetailType;
(function (CafeContactDetailType) {
  CafeContactDetailType[CafeContactDetailType["INDIVIDUAL"] = 0] = "INDIVIDUAL";
  CafeContactDetailType[CafeContactDetailType["ORGANIZATION"] = 1] = "ORGANIZATION";
})(CafeContactDetailType || (CafeContactDetailType = {}));

/***/ }),

/***/ 96498:
/*!***************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/mappers/cafe-contact-details.mapper.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetailsMapper: () => (/* binding */ CafeContactDetailsMapper)
/* harmony export */ });
/* harmony import */ var _models_cafe_contact_details_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/cafe-contact-details.model */ 9745);
/* harmony import */ var _common_address_mappers_address_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/address/mappers/address.mapper */ 21798);
/* harmony import */ var _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/cafe-contact-detail-type */ 66137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class CafeContactDetailsMapper {
  addressMapper;
  constructor(addressMapper) {
    this.addressMapper = addressMapper;
  }
  toModel(response) {
    const contactDetails = new _models_cafe_contact_details_model__WEBPACK_IMPORTED_MODULE_0__.CafeContactDetails();
    if (response === undefined || response.contactdetails === undefined) {
      return contactDetails;
    }
    const rawContactDetails = response.contactdetails;
    switch (rawContactDetails.class) {
      case 'ORGANIZATION':
        contactDetails.type = _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__.CafeContactDetailType.ORGANIZATION;
        break;
      case 'INDIVIDUAL':
        contactDetails.type = _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__.CafeContactDetailType.INDIVIDUAL;
        break;
      default:
        contactDetails.type = _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_2__.CafeContactDetailType.INDIVIDUAL;
        break;
    }
    const organization = rawContactDetails.organization;
    if (organization) {
      contactDetails.firstName = organization.name;
      contactDetails.lastName = '';
      contactDetails.organisation = {
        companyName: organization.name,
        customerNumber: organization.customernumber,
        legalForm: organization.type,
        vatNumber: organization.vat
      };
    } else {
      contactDetails.epithet = rawContactDetails?.individual?.epithet ?? '';
      contactDetails.firstName = rawContactDetails?.individual?.firstname ?? '';
      contactDetails.lastName = rawContactDetails?.individual?.lastname ?? '';
      contactDetails.dateofbirth = rawContactDetails?.individual?.dateofbirth;
    }
    contactDetails.language = rawContactDetails.language.toLowerCase();
    if (rawContactDetails.contactinfo) {
      contactDetails.telephoneNumbers = rawContactDetails.contactinfo.telephones;
      contactDetails.mobilePhoneNumbers = rawContactDetails.contactinfo.mobiles;
      contactDetails.emails = rawContactDetails.contactinfo.emails;
      contactDetails.internationalPhoneNumbers = rawContactDetails.contactinfo.internationalphones;
    }
    contactDetails.privacySetting = rawContactDetails.privacysetting;
    contactDetails.rightToObjectStatus = rawContactDetails.righttoobjectstatus;
    this.setAddresses(contactDetails, rawContactDetails?.addresses);
    return contactDetails;
  }
  setAddresses(contactDetails, rawAddresses) {
    if (rawAddresses) contactDetails.addresses = this.addressMapper.toModel(rawAddresses);
  }
  static ɵfac = function CafeContactDetailsMapper_Factory(t) {
    return new (t || CafeContactDetailsMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_common_address_mappers_address_mapper__WEBPACK_IMPORTED_MODULE_1__.AddressMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CafeContactDetailsMapper,
    factory: CafeContactDetailsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9745:
/*!*************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/models/cafe-contact-details.model.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetails: () => (/* binding */ CafeContactDetails),
/* harmony export */   RawContactDetails: () => (/* binding */ RawContactDetails)
/* harmony export */ });
/* harmony import */ var _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/cafe-contact-detail-type */ 66137);

class CafeContactDetails {
  static POSTAL_CONTACT_TYPE = 'POSTALCONTACT';
  type;
  language;
  epithet;
  firstName;
  lastName;
  dateofbirth;
  addresses = [];
  telephoneNumbers = [];
  mobilePhoneNumbers = [];
  emails = [];
  internationalPhoneNumbers = [];
  privacySetting;
  rightToObjectStatus;
  organisation;
  isOrganization() {
    return this.type === _enums_cafe_contact_detail_type__WEBPACK_IMPORTED_MODULE_0__.CafeContactDetailType.ORGANIZATION;
  }
}
class RawContactDetails {
  class;
  specurl;
  privacysetting;
  organization;
  individual;
  language;
  righttoobjectstatus;
  addresses;
  contactinfo;
}

/***/ }),

/***/ 51118:
/*!*****************************************************************************************************************!*\
  !*** ./apps/marketing/marketing-mfe/src/app/http/cafe/contact-details/services/cafe-contact-details.service.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeContactDetailsService: () => (/* binding */ CafeContactDetailsService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappers_cafe_contact_details_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mappers/cafe-contact-details.mapper */ 96498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);





class CafeContactDetailsService {
  ocapiService;
  cafeContactDetailsMapper;
  PROPERTY_URL = '/public/?p=contactdetails';
  constructor(ocapiService, cafeContactDetailsMapper) {
    this.ocapiService = ocapiService;
    this.cafeContactDetailsMapper = cafeContactDetailsMapper;
  }
  getContactDetails(messageGroup) {
    return this.ocapiService.doGet(this.getOcapiCallConfig(messageGroup));
  }
  getOcapiCallConfig(messageGroup) {
    return new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, this.PROPERTY_URL, this.cafeContactDetailsMapper);
  }
  static ɵfac = function CafeContactDetailsService_Factory(t) {
    return new (t || CafeContactDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_mappers_cafe_contact_details_mapper__WEBPACK_IMPORTED_MODULE_1__.CafeContactDetailsMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CafeContactDetailsService,
    factory: CafeContactDetailsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}])
//# sourceMappingURL=apps_marketing_marketing-mfe_src_app_cafe_priced-customer-product-holding_ui_priced-customer--2fac260.js.map