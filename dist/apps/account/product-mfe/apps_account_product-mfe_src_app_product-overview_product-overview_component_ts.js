(self["webpackChunkproduct_mfe"] = self["webpackChunkproduct_mfe"] || []).push([["apps_account_product-mfe_src_app_product-overview_product-overview_component_ts"],{

/***/ 81554:
/*!*******************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/constants/bundle-c5.constant.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BundleC5Contants: () => (/* binding */ BundleC5Contants)
/* harmony export */ });
class BundleC5Contants {
  static C5_SECTIONS = [{
    title: 'ng.product-overview.lbl.connectivity',
    productTypes: ['mobile', 'internet', 'telephone', 'phone2go'],
    showPlanLevelIncludedOptions: false,
    showPlanLevelNonIncludedOptions: true,
    type: 'connectivity'
  }, {
    title: 'ng.product-overview.lbl.entertainment',
    productTypes: ['dtv'],
    showPlanLevelIncludedOptions: false,
    showPlanLevelNonIncludedOptions: false,
    type: 'entertainment'
  }, {
    title: 'ng.product-overview.lbl.included-options',
    productTypes: [],
    showPlanLevelIncludedOptions: true,
    showPlanLevelNonIncludedOptions: false,
    type: 'includedOptions'
  }, {
    title: 'ng.product-overview.lbl.streaming-services',
    productTypes: ['streaming'],
    showPlanLevelIncludedOptions: true,
    showPlanLevelNonIncludedOptions: false,
    type: 'streaming'
  }];
  static SHOW_ALWAYS_OPTIONS = ['BANY0102'];
}

/***/ }),

/***/ 27044:
/*!****************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/constants/events.constant.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsConstants: () => (/* binding */ EventsConstants)
/* harmony export */ });
class EventsConstants {
  static EVENT_NAME_MANAGE_OPTION_CLICK = 'manage options link clicked';
  static EVENT_NAME_SECURITY_OPTION_CLICK = 'security options link clicked';
  static EVENT_NAME_TARIFF_PLAN = 'plan details viewed';
  static EVENT_TYPE_CLICK = 'click';
  static EVENT_STATUS_SUCCESS = 'success';
  static EVENT_TYPE_VIEW_PRODUCT_DETAILS = 'view-product-details';
  static EVENT_ATTRIBUTE_PRODUCT = 'product';
  static EVENT_NAME_MODEM_UPGRADE_BANNER = 'upgrade modem button clicked';
  static EVENT_NAME_CHANGE_PLAN_CLICK = 'change plan link clicked';
  static EVENT_KEY_ENTER = 'Enter';
}

/***/ }),

/***/ 73660:
/*!**********************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/constants/product-icon.constant.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductIconConstants: () => (/* binding */ ProductIconConstants)
/* harmony export */ });
class ProductIconConstants {
  static SUBCATEGORY_SECURITY = 'Security Option';
  static SECURITY_ICON = 'lock';
  static INTERNATIONAL_CALLING_EPC = 'BERU0001';
  static INTERNATIONAL_CALLING_ICON = 'globe';
  static KONG_EPC = 'KONG0000';
  static KONG_UNLIMITED_EPC = 'KONG0020';
  static KONG_EPC_ICON = 'copy';
  static DATA_SIM_EPC = 'MBLN0002';
  static DATA_SIM_EPC_ICON = 'sim-card-data';
  static STREAMING_PRODUCT_PREFIX = 'STRM';
  static STREAMING_ICON = 'popcorn';
  static PRODUCT_TYPE_INTERNET = 'internet';
  static INTERNET_ICON = 'wifi';
  static PRODUCT_TYPE_MOBILE = 'mobile';
  static MOBILE_ICON = 'mobile';
  static PRODUCT_TYPE_DTV = 'dtv';
  static DTV_ICON = 'tv';
  static PRODUCT_TYPE_FIXED_TELEPHONE = 'telephone';
  static FIXED_TELEPHONY_ICON = 'telephone';
  static PRODUCT_TYPE_PHONE2GO = 'phone2go';
  static PHONE2GO_TELEPHONE_ICON = 'telephone';
}

/***/ }),

/***/ 66191:
/*!**************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/constants/product-overview.constant.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLimitEnum: () => (/* binding */ DataLimitEnum),
/* harmony export */   ProductOverviewConstants: () => (/* binding */ ProductOverviewConstants)
/* harmony export */ });
class ProductOverviewConstants {
  static EMPTY = '';
  static API_VERSION_V1 = 'v1';
  static API_VERSION_V2 = 'v2';
  static CONTEXT_PRODUCT = '/products';
  static CONTEXT_PHONE_TO_GO = '/cloud-telephony/phone2go';
  static PRODUCT_SERVICE_PREFIX = '/public/api/product-service/';
  static RESOURCE_SERVICE_PREFIX = '/public/api/resource-service/';
  static CUSTOMER_SERVICE_PREFIX = '/public/api/customer-service/';
  // Statuses
  static ACTIVE_STATUS = 'ACTIVE';
  static SUSPENDED_STATUS = 'SUSPENDED';
  static ACTIVATION_IN_PROGRESS_STATUS = 'ACTIVATION_IN_PROGRESS';
  static DISCONNECTION_IN_PROGRESS_STATUS = 'DISCONNECTION_IN_PROGRESS';
  static DISCONNECTION_PASSED_PONR_STATUS = 'DISCONNECTION_PASSED_PONR';
  static DISCONNECTED_STATUS = 'DISCONNECTED';
  static STATUS_NOT_ACTIVE = 'NOT_ACTIVE';
  static INTERMEDIATE_PRODUCT_STATUSES = ['SUSPENSION_IN_PROGRESS', 'SUSPENSION_PASSED_PONR', 'MODIFICATION_IN_PROGRESS', 'MODIFICATION_PASSED_PONR', 'RESUMING_IN_PROGRESS', 'RESUMING_PASSED_PONR', 'DISCONNECTION_IN_PROGRESS', 'DISCONNECTION_PASSED_PONR'];
  static SUSPEND_PRODUCT_STATUSES = ['SUSPENDED', 'SUSPENSION_IN_PROGRESS', 'SUSPENSION_PASSED_PONR'];
  static MODIFICATION_PRODUCT_STATUSES = ['MODIFICATION_IN_PROGRESS', 'MODIFICATION_PASSED_PONR'];
  static DISCONNECTION_PRODUCT_STATUSES = ['DISCONNECTION_IN_PROGRESS', 'DISCONNECTION_PASSED_PONR'];
  static ACTIVATION_PRODUCT_STATUSES = ['ACTIVATION_IN_PROGRESS', 'ACTIVATION_PASSED_PONR'];
  static UNLIMITED = 'UNLIMITED';
  static SMS_UNIT = 'NUMBER';
  static PRODUCT_OPTIONS = 'product-options';
  static PREPAID_MOBILE = 'prepaid-mobile';
  static STREAMING_SERVICE_CATEGORY_RULES = ['streaming-standalones', 'for-rules---netflix-premium-placeholder', 'streaming-bundles'];
  static BRAND_TELENET = 'TELENET';
  static BUNDLE = 'bundle';
  static DTV = 'dtv';
  static MOBILE_MONETARY = 'MOBILE_MONETARY';
  static MESSAGE_GROUP = 'product-overview';
  static MESSAGE_GROUP_CUSTOMER = 'ch-customer';
  static GENERIC_ERROR_CODE = 'ocapi.response-500-OCAPI-ERR-OCGE500';
  static BUNDLE_TYPE_C5 = 'Connect 5';
  static WEIGHT = 'weight';
  static NEW_ONEUP_BUNDLE_KEY = 'LimitedMobileVolumeSupported';
  static ENDPOINT_IDENTITY = '/identities';
}
var DataLimitEnum;
(function (DataLimitEnum) {
  DataLimitEnum["FIVE_GB"] = "5 GB";
  DataLimitEnum["UNLIMITED"] = "Unlimited";
  DataLimitEnum["UNKNOWN"] = "Unknown";
})(DataLimitEnum || (DataLimitEnum = {}));

/***/ }),

/***/ 70141:
/*!****************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/constants/promotion-service.constants.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromotionServiceConstants: () => (/* binding */ PromotionServiceConstants)
/* harmony export */ });
class PromotionServiceConstants {
  static PROMOTION_SERVICE_PREFIX = '/public/api/promotion-service/';
  static API_VERSION_V1 = 'v1';
  static CONTEXT_TIP = '/tip/';
  static CONTRACTS = 'contracts';
  static TIP = 'TIP';
  static TELENET_INCENTIVE_PLAN = 'Telenet Incentive Plan';
}

/***/ }),

/***/ 22563:
/*!**************************************************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component.ts ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrandFatheringSocialTariffNotificationComponent: () => (/* binding */ GrandFatheringSocialTariffNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







class GrandFatheringSocialTariffNotificationComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AbstractBaseComponent {
  dialogRef;
  constructor(dialogRef) {
    super();
    this.dialogRef = dialogRef;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  confirm() {
    this.dialogRef.close(true);
  }
  static ɵfac = function GrandFatheringSocialTariffNotificationComponent_Factory(t) {
    return new (t || GrandFatheringSocialTariffNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GrandFatheringSocialTariffNotificationComponent,
    selectors: [["grand-fathering-social-tariff-notification"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 12,
    consts: [[1, "overlay__mask", "overlay__mask--backdrop", "backdrop-filter--3", "animation--fade-in"], [1, "container"], [1, "overlay__section", "py--g--sm", "py--l", "py--xxxg--md", "px--n--sm", "px--s", "overlay__section--align-top"], [1, "overlay__section__content--wrapper", "animation--slide-down-to-screen", "overflow--hidden", "pl-40", "pr-40"], [1, "overlay__section__content__close"], [1, "link", "link--no-underline", "secondary", 3, "click"], [1, "icon", "icon-close"], [1, "background-white"], [1, "text-align--left", "mt-0"], ["tabindex", "-1", 1, "text-align--left", "mb-20", 3, "innerHTML"], [1, "text-align--right"], ["tabindex", "-1", 1, "button", "button--secondary", "mr-10", 3, "click"], ["tabindex", "-1", 1, "button", "button--primary", 3, "click"]],
    template: function GrandFatheringSocialTariffNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrandFatheringSocialTariffNotificationComponent_Template_a_click_5_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrandFatheringSocialTariffNotificationComponent_Template_button_click_14_listener() {
          return ctx.closeDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GrandFatheringSocialTariffNotificationComponent_Template_button_click_18_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 4, "ng.product-overview.lbl.grandfathering-change-tariff-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 6, "ng.product-overview.lbl.grandfathering-change-tariff-description"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 8, "ng.product-overview.lbl.grandfathering-change-tariff-cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 10, "ng.product-overview.lbl.grandfathering-change-tariff-confirm"), " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    styles: [".overlay__section__content__close[_ngcontent-%COMP%] {\n  right: 3.8rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYWNjb3VudC9wcm9kdWN0LW1mZS9zcmMvYXBwL3Byb2R1Y3Qtb3ZlcnZpZXcvZ3JhbmQtZmF0aGVyaW5nLXNvY2lhbC10YXJpZmYtbm90aWZpY2F0aW9uL2dyYW5kLWZhdGhlcmluZy1zb2NpYWwtdGFyaWZmLW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5X19zZWN0aW9uX19jb250ZW50X19jbG9zZSB7XG4gIHJpZ2h0OiAzLjhyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9477:
/*!*****************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/mappers/phone-to-go.mapper.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneToGoMapper: () => (/* binding */ PhoneToGoMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class PhoneToGoMapper {
  toModel(rawPhoneToGo) {
    return rawPhoneToGo.users.map(rawPhoneToGoUser => {
      return this.toPhoneToGoNumbers(rawPhoneToGoUser);
    });
  }
  toPhoneToGoNumbers(rawPhoneToGoUser) {
    const isActive = rawPhoneToGoUser.emailAddress ? rawPhoneToGoUser.emailAddress.length > 0 : false;
    return {
      phoneNumber: rawPhoneToGoUser.phoneNumber,
      active: isActive
    };
  }
  static ɵfac = function PhoneToGoMapper_Factory(t) {
    return new (t || PhoneToGoMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PhoneToGoMapper,
    factory: PhoneToGoMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 95034:
/*!*************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/mappers/product.mapper.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductMapper: () => (/* binding */ ProductMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product.model */ 72929);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductMapper {
  omapiMapper;
  constructor(omapiMapper // private readonly omapiService: OmapiQueryProductService
  ) {
    this.omapiMapper = omapiMapper;
  }
  toModel(rawProducts) {
    return rawProducts.map(rawProduct => {
      if (rawProduct.productType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV && rawProduct.children?.length === 1) {
        const dtvProduct = this.getBundleProductDetails(rawProduct.children[0], rawProduct);
        dtvProduct.children = [];
        dtvProduct.locationId = rawProduct.locationId;
        dtvProduct.addressId = rawProduct.addressId;
        dtvProduct.parentIdentifier = rawProduct.identifier;
        dtvProduct.hasOldSocialTariffDiscount = rawProduct.hasOldSocialTariffDiscount;
        return dtvProduct;
      } else {
        return this.createProduct(rawProduct);
      }
    });
  }
  createProduct(rawProduct) {
    const product = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
    product.accountNumber = Number(rawProduct.accountNumber);
    product.handsets = this.getHandsets(rawProduct.handsets);
    product.locationId = rawProduct.locationId;
    product.identifier = rawProduct.identifier;
    product.label = rawProduct.label;
    product.options = this.getOptions(rawProduct.options);
    product.price = this.createPrice(rawProduct.price);
    product.productInfo = this.createProductInfo(rawProduct.rawOmapi);
    product.productType = rawProduct.productType;
    product.specUrl = rawProduct.specurl;
    product.status = rawProduct.status;
    product.addressId = rawProduct.addressId;
    product.isUnderMove = false;
    product.showModemUpgradeBanner = rawProduct.showModemUpgradeBanner;
    product.bundleType = rawProduct.bundleType;
    product.hasOldSocialTariffDiscount = rawProduct.hasOldSocialTariffDiscount;
    product.hasExtraOptions = product.options.some(option => !option.isIncludedOption);
    product.hasIncludedOptions = product.options.some(option => option.isIncludedOption);
    product.children = this.createChildren(rawProduct);
    if (rawProduct.upgradePossibleTo) {
      product.upgradePossibleTo = rawProduct.upgradePossibleTo;
    }
    if (rawProduct.productType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.BUNDLE && rawProduct.children.filter(child => child.productType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV)?.length > 1) {
      product.isMultipleDTV = true;
    }
    return product;
  }
  getOptions(rawOptions) {
    let options = [];
    rawOptions?.forEach(rawOption => {
      const option = {
        label: rawOption.label,
        productInfo: this.createProductInfo(rawOption.rawOmapi),
        status: rawOption.status,
        price: this.createPrice(rawOption.price),
        isIncludedOption: rawOption.isIncludedOption,
        isFree: rawOption.isFree,
        activeOptions: rawOption.activeOptions,
        productType: rawOption.productType
      };
      if (rawOption.contract) {
        option.contract = this.getContractDetails(rawOption.contract);
      }
      /// STILLTOCHECK
      if (rawOption.upgradePossibleTo) {
        option.upgradePossibleTo = rawOption.upgradePossibleTo;
      }
      option.weight = option.productInfo.weight;
      options.push(option);
    });
    options = options.sort((a, b) => {
      return (a.weight || 0) - (b.weight || 0);
    });
    return options;
  }
  getHandsets(rawHandsets) {
    const handsets = [];
    rawHandsets?.forEach(rawHandset => {
      const currentDate = new Date();
      const obligationEndDate = rawHandset.contract?.obligationEndDate;
      if (new Date(obligationEndDate) > currentDate) {
        const handset = {
          identifier: rawHandset.identifier,
          msisdn: rawHandset.msisdn,
          accountNumber: rawHandset.accountNumber,
          label: rawHandset.label,
          /// productInfo: rawHandset.queryurl
          //   ? this.omapiService.getRawQueryProductByEndpoint('', rawHandset.queryurl)
          //   : [],
          productInfo: rawHandset.rawOmapiQuery,
          contract: this.getContractDetails(rawHandset.contract),
          handsetName: this.getHandsetName(rawHandset.label, rawHandset.rawOmapiQuery?.products)
        };
        handsets.push(handset);
      }
    });
    return handsets;
  }
  getHandsetName(label, info) {
    if (info?.length) {
      const variant = info[0].variants[0];
      /// STILLTOCHECK
      return variant?.manBrand?.localizedContent?.[0]?.value?.[0] + ' ' + variant.shortDescription?.localizedContent?.[0]?.data;
    }
    return label;
  }
  getContractDetails(rawContract) {
    if (!rawContract) {
      return {};
    }
    const contract = {
      obligationEndDate: rawContract.obligationEndDate,
      duration: rawContract.duration
    };
    if (rawContract.price) {
      contract.price = this.createPrice(rawContract.price);
    }
    return contract;
  }
  createPrice(rawPrices) {
    const prices = {
      currency: rawPrices?.currency,
      recurrentTotal: rawPrices?.recurrentTotal,
      recurrentDiscounted: rawPrices?.recurrentDiscounted,
      recurrentDiscount: rawPrices?.recurrentDiscount,
      earlyTerminationFee: rawPrices?.earlyTerminationFee,
      taxInclPrices: {
        currency: rawPrices?.currency,
        recurrentTotal: rawPrices?.taxInclPrices?.recurrentTotal,
        recurrentDiscounted: rawPrices?.taxInclPrices?.recurrentDiscounted,
        recurrentDiscount: rawPrices?.recurrentDiscount
      }
    };
    return prices;
  }
  createProductInfo(rawOmapi) {
    if (rawOmapi) {
      return this.omapiMapper.toModel(rawOmapi);
    }
    return {};
  }
  createChildren(rawProduct) {
    if (!rawProduct.children?.length) {
      return [];
    }
    let childArray = [];
    rawProduct.children.forEach(child => {
      childArray.push(this.getBundleProductDetails(child, rawProduct));
    });
    childArray = childArray.sort((a, b) => {
      return (a.productSpec?.weight || 0) - (b.productSpec?.weight || 0);
    });
    let mobileLines = childArray.filter(item => item.productType === 'mobile');
    if (mobileLines && mobileLines.length > 0) {
      mobileLines = mobileLines.sort((mobileLine1, mobileLine2) => mobileLine1.status < mobileLine2.status ? -1 : 1);
      childArray = childArray.filter(item => item.productType !== 'mobile');
      childArray.push(mobileLines[0]);
    }
    return childArray;
  }
  getBundleProductDetails(child, rawProduct) {
    const bundleProduct = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
    bundleProduct.eSimStatus = child.eSimStatus;
    bundleProduct.identifier = child.identifier;
    bundleProduct.id = child.id;
    bundleProduct.status = child.status;
    bundleProduct.handsets = this.getHandsets(child.handsets);
    bundleProduct.productType = child.productType;
    bundleProduct.productSpec = this.createProductInfo(child.rawOmapi);
    bundleProduct.productInfo = this.createProductInfo(rawProduct.rawOmapi);
    bundleProduct.addressId = rawProduct.addressId;
    if (child.contentPacks?.length) {
      /// bundleProduct.productInfo.contentPacks = this.createProductInfo(child.contentPacks[0]?.rawOmapi)
      /// bundleProduct.productInfo.contentPackSpecifications = bundleProduct.productInfo.contentPacks && bundleProduct.productInfo.contentPacks.services && bundleProduct.productInfo.contentPacks.services[0] &&
      ///                                                        bundleProduct.productInfo.contentPacks.services[0].specifications;
      bundleProduct.contentPacks = child.contentPacks.map(rawContentPack => {
        const mappedContentPack = {};
        mappedContentPack.label = rawContentPack.label;
        mappedContentPack.status = rawContentPack.status;
        mappedContentPack.isIncludedOption = rawContentPack.isIncludedOption;
        mappedContentPack.productInfo = this.createProductInfo(rawContentPack.rawOmapi);
        return mappedContentPack;
      });
    }
    if (child.experience) {
      bundleProduct.experience = {};
      bundleProduct.experience.experienceId = child.experience.experienceId;
      bundleProduct.experience.label = child.experience.label;
      bundleProduct.experience.productInfo = this.createProductInfo(child.experience.rawOmapi);
    }
    bundleProduct.options = this.getOptions(child.options);
    bundleProduct.hasIncludedOptions = Boolean(bundleProduct.options.find(option => option.isIncludedOption));
    bundleProduct.hasExtraOptions = Boolean(bundleProduct.options.find(option => !option.isIncludedOption));
    bundleProduct.bundleMaxlines = this.getBundleMaxPossibleLines(bundleProduct.productInfo);
    bundleProduct.label = child.label;
    if (bundleProduct.productType === 'mobile') {
      bundleProduct.mobileIdentifier = [];
      bundleProduct.limitedLines = [];
      bundleProduct.unlimitedLines = [];
      rawProduct.children.forEach(child => {
        if (child.productType === 'mobile') {
          bundleProduct.mobileIdentifier?.push({
            identifier: child.identifier,
            eSimStatus: child.eSimStatus
          });
          if (rawProduct.rawOmapi?.product?.unlimited === true || child.dataLimit?.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.UNLIMITED) {
            bundleProduct.unlimitedLines?.push(child.identifier);
          } else {
            bundleProduct.limitedLines?.push(child.identifier);
          }
        }
      });
    }
    if (rawProduct.productType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.BUNDLE && bundleProduct.productType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV && rawProduct.children.filter(child => child.productType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV)?.length > 1) {
      bundleProduct.isMultipleDTV = true;
    }
    return bundleProduct;
  }
  getBundleMaxPossibleLines(product) {
    const generalService = product.services?.find(service => service.serviceType.toLowerCase() === 'general');
    const mobileMaxLineSpecification = generalService?.specifications?.find(specification => specification.labelKey === 'spec-bundle-mobile-maxlines');
    return Number(mobileMaxLineSpecification?.value);
  }
  static ɵfac = function ProductMapper_Factory(t) {
    return new (t || ProductMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__.OmapiProductMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProductMapper,
    factory: ProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 36818:
/*!************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/mappers/profile-details-by-identity-id.mapper.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileDetailsByIdentityIDMapper: () => (/* binding */ ProfileDetailsByIdentityIDMapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class ProfileDetailsByIdentityIDMapper {
  toModel(rawProfileDetails) {
    return rawProfileDetails.msisdn?.[0];
  }
  static ɵfac = function ProfileDetailsByIdentityIDMapper_Factory(t) {
    return new (t || ProfileDetailsByIdentityIDMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProfileDetailsByIdentityIDMapper,
    factory: ProfileDetailsByIdentityIDMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 32526:
/*!*******************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/mappers/tip-contracts.mapper.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIPContractStatusEnum: () => (/* binding */ TIPContractStatusEnum),
/* harmony export */   TIPContractsMapper: () => (/* binding */ TIPContractsMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/promotion-service.constants */ 70141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




var TIPContractStatusEnum;
(function (TIPContractStatusEnum) {
  TIPContractStatusEnum["ACTIVE"] = "Active";
  TIPContractStatusEnum["DISCONNECTED"] = "Disconnected";
  TIPContractStatusEnum["DISABLED"] = "Disabled";
})(TIPContractStatusEnum || (TIPContractStatusEnum = {}));
// eslint-disable-next-line max-len
class TIPContractsMapper {
  omapiProductMapper;
  constructor(omapiProductMapper) {
    this.omapiProductMapper = omapiProductMapper;
  }
  toModel(rawTIPContracts) {
    return this.createTIPContracts(rawTIPContracts);
  }
  // eslint-disable-next-line max-len
  createTIPContracts(rawTIPContracts) {
    if (rawTIPContracts instanceof Array) {
      return rawTIPContracts && rawTIPContracts.map(rawTIPContract => {
        return this.createTIPContract(rawTIPContract);
      });
    } else {
      return [this.createTIPContract(rawTIPContracts)];
    }
  }
  createTIPContract(rawTIPContract) {
    const tipContract = {};
    if (rawTIPContract) {
      tipContract.activationDate = rawTIPContract.activationDate;
      tipContract.cancellationDate = rawTIPContract.cancellationDate;
      tipContract.planName = rawTIPContract.planName;
      tipContract.customerProductId = rawTIPContract.customerProductId;
      tipContract.epc = rawTIPContract.epc;
      tipContract.status = rawTIPContract.status;
      tipContract.normalizedStatus = this.getNormalizedStatus(rawTIPContract?.status);
      tipContract.tipMRC = this.createTIPUsage(rawTIPContract.tipMRC);
      tipContract.tipNRC = this.createTIPUsage(rawTIPContract.tipNRC);
      tipContract.tipUsage = this.createTIPUsage(rawTIPContract.tipUsage);
      tipContract.productInfo = this.omapiProductMapper.toModel(rawTIPContract.rawOmapi);
      tipContract.noOfEmployees = rawTIPContract.noOfEmployees;
      tipContract.futureProcessingDate = rawTIPContract.futureProcessingDate;
      tipContract.displayPlanName = tipContract.planName.replace(_constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_1__.PromotionServiceConstants.TELENET_INCENTIVE_PLAN, _constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_1__.PromotionServiceConstants.TIP);
    }
    return tipContract;
  }
  createTIPUsage(rawTIPUsage) {
    const tipUsage = {};
    if (rawTIPUsage) {
      tipUsage.vatExcl = rawTIPUsage.vatExcl.replace('.', ',');
      tipUsage.vatIncl = rawTIPUsage.vatIncl.replace('.', ',');
    }
    return tipUsage;
  }
  getNormalizedStatus(status) {
    if (!status) {
      return '';
    }
    if (status.toLowerCase() === TIPContractStatusEnum.ACTIVE.toLowerCase()) {
      return TIPContractStatusEnum.ACTIVE;
    }
    if (status.toLowerCase() === TIPContractStatusEnum.DISCONNECTED.toLowerCase()) {
      return TIPContractStatusEnum.DISCONNECTED;
    }
    return TIPContractStatusEnum.DISABLED;
  }
  static ɵfac = function TIPContractsMapper_Factory(t) {
    return new (t || TIPContractsMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__.OmapiProductMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TIPContractsMapper,
    factory: TIPContractsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72929:
/*!***********************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/models/product.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);

class Product {
  static BUNDLE_TYPE_C5 = 'Connect 5';
  static BUNDLE_TYPE_KLIK = 'KLIK';
  children;
  bundleType;
  id;
  productInfo;
  handsets;
  productType;
  addressId;
  eSimStatus;
  identifier;
  upgradePossibleTo;
  hasIncludedOptions;
  contentPacks;
  options;
  hasExtraOptions;
  accountNumber;
  label;
  specUrl;
  productSpec;
  status;
  price;
  isUnderMove;
  isMultipleDTV;
  experience;
  parentIdentifier;
  locationId;
  mobileIdentifier;
  limitedLines;
  unlimitedLines;
  datalimit;
  bundleMaxlines;
  showModemUpgradeBanner;
  hasOldSocialTariffDiscount;
  isProductActive() {
    return this.status === 'ACTIVE';
  }
  isProductSuspended() {
    return _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.SUSPEND_PRODUCT_STATUSES.includes(this.status);
  }
  isProductModificationInProgress() {
    return _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.MODIFICATION_PRODUCT_STATUSES.includes(this.status);
  }
  isProductDisconnectionInProgress() {
    return _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.DISCONNECTION_PRODUCT_STATUSES.includes(this.status);
  }
  isProductActivationInProgress() {
    return _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.ACTIVATION_PRODUCT_STATUSES.includes(this.status);
  }
  isC5Bundle() {
    return this.bundleType === Product.BUNDLE_TYPE_C5 || !!this.bundleType?.match(Product.BUNDLE_TYPE_KLIK);
  }
  hasValidPrice(price) {
    return price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00';
  }
}

/***/ }),

/***/ 3146:
/*!**************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/pipes/phone-number.pipe.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneNumberPipe: () => (/* binding */ PhoneNumberPipe)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-layout */ 55606);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
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
    return new (t || PhoneNumberPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_0__.PhoneNumberTransformService, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "phoneNumber",
    type: PhoneNumberPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 702:
/*!*********************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-bundle/product-bundle-child/product-bundle-child.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBundleChildComponent: () => (/* binding */ ProductBundleChildComponent)
/* harmony export */ });
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/product.model */ 72929);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/product-overview.constant */ 66191);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product-overview.service */ 66082);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ 48717);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/events.constant */ 27044);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/phone-number.pipe */ 3146);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../product-specifications/product-specifications.component */ 3715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);
















function ProductBundleChildComponent_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r10.product.identifier), " ");
  }
}
function ProductBundleChildComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProductBundleChildComponent_div_9_span_2_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.product.identifier);
  }
}
function ProductBundleChildComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "span")(3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.product.mobileIdentifier == null ? null : ctx_r1.product.mobileIdentifier.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 4, "ng.product-overview.lbl.bundleMaxline-out-of"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.product.bundleMaxlines);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 6, "ng.product-overview.lbl.bundleMaxline-numbers"));
  }
}
function ProductBundleChildComponent_div_11_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function ProductBundleChildComponent_div_11_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.handleManageOptions($event, ctx_r12.plan.identifier, ctx_r12.product, true));
    })("click", function ProductBundleChildComponent_div_11_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r14.manageOptions(ctx_r14.plan.identifier, ctx_r14.product, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductBundleChildComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductBundleChildComponent_div_11_a_1_Template, 3, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.product.isProductActive() && !ctx_r2.product.isMultipleDTV || !ctx_r2.product.productType);
  }
}
function ProductBundleChildComponent_div_12_div_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function ProductBundleChildComponent_div_12_div_1_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r17.handleRedirectToOrderSimSalesFlow($event, ctx_r17.changeTariffPlanUrl, "marketing", "add-sim", ctx_r17.plan.identifier, ctx_r17.plan.productType, ctx_r17.plan.locationId, "add sim link clicked"));
    })("click", function ProductBundleChildComponent_div_12_div_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.redirectToOrderSimSalesFlow(ctx_r19.changeTariffPlanUrl, "marketing", "add-sim", ctx_r19.plan.identifier, ctx_r19.plan.productType, ctx_r19.plan.locationId, "add sim link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.order-sim"), " ");
  }
}
function ProductBundleChildComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductBundleChildComponent_div_12_div_1_a_1_Template, 3, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r15.product.mobileIdentifier && ctx_r15.product.bundleMaxlines && ctx_r15.product.mobileIdentifier.length < ctx_r15.product.bundleMaxlines);
  }
}
function ProductBundleChildComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductBundleChildComponent_div_12_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.product.productType === "mobile");
  }
}
function ProductBundleChildComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-activation-in-progress"));
  }
}
function ProductBundleChildComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-disconnection-in-progress"));
  }
}
function ProductBundleChildComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-modification-in-progress"));
  }
}
function ProductBundleChildComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span")(1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-suspended"));
  }
}
function ProductBundleChildComponent_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function ProductBundleChildComponent_div_20_div_1_div_1_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.handleRedirectToOrderSimSalesFlow($event, ctx_r22.changeTariffPlanUrl, "marketing", "add-sim", ctx_r22.plan.identifier, ctx_r22.plan.productType, ctx_r22.plan.locationId, "add sim link clicked"));
    })("click", function ProductBundleChildComponent_div_20_div_1_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.redirectToOrderSimSalesFlow(ctx_r24.changeTariffPlanUrl, "marketing", "add-sim", ctx_r24.plan.identifier, ctx_r24.plan.productType, ctx_r24.plan.locationId, "add sim link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-sim"), " ");
  }
}
function ProductBundleChildComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductBundleChildComponent_div_20_div_1_div_1_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r20.product.mobileIdentifier && ctx_r20.product.bundleMaxlines && ctx_r20.product.mobileIdentifier.length < ctx_r20.product.bundleMaxlines);
  }
}
function ProductBundleChildComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductBundleChildComponent_div_20_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.product.productType === "mobile");
  }
}
function ProductBundleChildComponent_div_21_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown", function ProductBundleChildComponent_div_21_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.handleManageOptions($event, ctx_r26.plan.identifier, ctx_r26.product, true));
    })("click", function ProductBundleChildComponent_div_21_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      ctx_r28.manageOptions(ctx_r28.plan.identifier, ctx_r28.product, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductBundleChildComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductBundleChildComponent_div_21_a_1_Template, 3, 3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.product.isProductActive() && !ctx_r9.product.isMultipleDTV || !ctx_r9.product.productType);
  }
}
class ProductBundleChildComponent {
  urlService;
  dataLayerService;
  productOverviewService;
  set productOrOption({
    product,
    option
  }) {
    if (product) {
      this.product = product;
    }
    if (!product && option) {
      /// STILLTOCHECK
      const derefdOption = (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"])(option);
      this.product = new _models_product_model__WEBPACK_IMPORTED_MODULE_0__.Product();
      this.product.productInfo = derefdOption.productInfo;
      this.product.options = [derefdOption];
      this.product.status = derefdOption.status;
      this.product.productType = derefdOption.productType || '';
      this.product.productInfo.services?.forEach(serv => {
        serv.specifications?.forEach(spec => spec.productType = derefdOption.productType);
      });
    }
  }
  plan;
  hasSalesScope = false;
  canManageProductHolding = false;
  changeTariffPlanUrl;
  manageOptionUrl;
  componentInstanceID;
  streamingOptions;
  planUpgradeUrl;
  intentRequired;
  product;
  constructor(urlService, dataLayerService, productOverviewService) {
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
  }
  getProductIcon() {
    return this.productOverviewService.getProductIcon(this.product);
  }
  showChangePlan(product) {
    return this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  hasActiveOrSuspendedProducts(plan) {
    return plan && plan.children && plan.children.length && plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVE_STATUS) || plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.SUSPENDED_STATUS);
  }
  showManageOptions() {
    let isPrepaid = false;
    if (this.plan?.productInfo.categories?.length) {
      isPrepaid = this.plan?.productInfo.categories.some(item => {
        return item.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }
    return (isPrepaid || this.canManageProductHolding) && !this.plan?.productInfo.isYupProduct && !this.plan?.isUnderMove;
  }
  changeTariffPlan(productIdentifier) {
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=care&item=${productIdentifier}`);
  }
  manageOptions(planIdentifier, product, isBundle) {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${planIdentifier}&flow=${_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (isBundle) {
      url += product.productType ? '&producttype=bundle&category=' + product.productType : '&producttype=bundle';
    } else if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  redirectToOrderSimSalesFlow(url, flow, intent, identifier, productType, locationId, eventName) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    this.urlService.redirectTo(url + '?flow=' + flow + '&intent=' + intent + '&item=' + identifier + '&producttype=' + productType + '&locationId=' + locationId);
  }
  handleManageOptions(event, planIdentifier, product, isBundle) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_5__.EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(planIdentifier, product, isBundle);
    }
  }
  handleRedirectToOrderSimSalesFlow(event, url, flow, intent, identifier, productType, locationId, eventName) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_5__.EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToOrderSimSalesFlow(url, flow, intent, identifier, productType, locationId, eventName);
    }
  }
  static ɵfac = function ProductBundleChildComponent_Factory(t) {
    return new (t || ProductBundleChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ProductBundleChildComponent,
    selectors: [["tg-product-bundle-child"]],
    inputs: {
      productOrOption: "productOrOption",
      plan: "plan",
      hasSalesScope: "hasSalesScope",
      canManageProductHolding: "canManageProductHolding",
      changeTariffPlanUrl: "changeTariffPlanUrl",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      streamingOptions: "streamingOptions",
      planUpgradeUrl: "planUpgradeUrl",
      intentRequired: "intentRequired"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 23,
    vars: 20,
    consts: [[1, "content-section__details"], [1, "row", "display--flex", "align-items--center"], [1, "col-lg-6", "col-md-6", "col-xs-12", "display--flex", "align-items--center"], [1, "product-overview__content-section__image", "display--flex", "align-items--center", "justify-content--center"], [1, "icon", "icon-md", "text-weight--xxs", 3, "ngClass"], [1, "display--flex--md", "align-items--start--md"], [1, "ml--m"], [1, "text-font-family--t7", "text--xxm", "product-overview__heading"], ["class", "display--flex--md align-items--center pt--xxs", 4, "ngIf"], ["class", "hide-from-md pt--xxs", 4, "ngIf"], [4, "ngIf"], [1, "pl--m", "pt--xxxs", "pt--n--md"], [1, "col-lg-6", "col-md-6", "col-xs-12", "text-align--right", "hide-until-md"], [1, "display--flex", "align-items--center", "justify-content--end--md"], ["class", "text-align--right", 4, "ngIf"], ["class", "text-align--right hide-until-md ml--xxxl--md", 4, "ngIf"], [3, "product", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "manageOptionUrl", "isBundle", "componentInstanceID"], [1, "display--flex--md", "align-items--center", "pt--xxs"], [1, "text--s", "mt--n--md"], [1, "pr--xxxs"], [1, "hide-from-md", "pt--xxs"], ["tabindex", "0", "class", "font--body-regular link link--subtle", 3, "keydown", "click", 4, "ngIf"], ["tabindex", "0", 1, "font--body-regular", "link", "link--subtle", 3, "keydown", "click"], [1, "status-indicator", "status-indicator--warning", "word-break--ellipsis"], [1, "text-align--right"], ["class", "hide-until-md", 4, "ngIf"], [1, "hide-until-md"], ["tabindex", "0", 1, "text--xm--md", "text--m", "link", "link--subtle", 3, "keydown", "click"], [1, "text-align--right", "hide-until-md", "ml--xxxl--md"]],
    template: function ProductBundleChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ProductBundleChildComponent_div_9_Template, 3, 1, "div", 8)(10, ProductBundleChildComponent_div_10_Template, 13, 8, "div", 8)(11, ProductBundleChildComponent_div_11_Template, 2, 1, "div", 9)(12, ProductBundleChildComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, ProductBundleChildComponent_span_14_Template, 4, 3, "span", 10)(15, ProductBundleChildComponent_span_15_Template, 4, 3, "span", 10)(16, ProductBundleChildComponent_span_16_Template, 4, 3, "span", 10)(17, ProductBundleChildComponent_span_17_Template, 4, 3, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ProductBundleChildComponent_div_20_Template, 2, 1, "div", 14)(21, ProductBundleChildComponent_div_21_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "tg-product-specifications", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", "icon-" + ctx.getProductIcon());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-cy", "bundleProductName");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", (ctx.product.productSpec == null ? null : ctx.product.productSpec.name) || ctx.product.productInfo.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.productType === "telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.productType === "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showManageOptions());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.hasActiveOrSuspendedProducts(ctx.plan));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.isProductActivationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.isProductDisconnectionInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.isProductModificationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.product.isProductSuspended());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.hasActiveOrSuspendedProducts(ctx.plan));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showManageOptions());
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", ctx.product)("hasSalesScope", ctx.hasSalesScope)("canManageProductHolding", ctx.canManageProductHolding)("changeTariffPlanUrl", ctx.changeTariffPlanUrl)("manageOptionUrl", ctx.manageOptionUrl)("isBundle", true)("componentInstanceID", ctx.componentInstanceID);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_8__.ProductSpecificationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 72344:
/*!******************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-bundle/product-bundle.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBundleComponent: () => (/* binding */ ProductBundleComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component */ 22563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _product_bundle_child_product_bundle_child_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-bundle-child/product-bundle-child.component */ 702);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_11__);

















function ProductBundleComponent_ng_container_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "ng.product-overview.info.unable-to-manage"));
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown", function ProductBundleComponent_ng_container_1_div_1_div_10_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r12.handleRedirectToMarketingConfigurator($event, ctx_r12.planUpgradeUrl, ctx_r12.getIntent(plan_r1), plan_r1, "change plan link clicked"));
    })("click", function ProductBundleComponent_ng_container_1_div_1_div_10_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r15.redirectToMarketingConfigurator(ctx_r15.planUpgradeUrl, ctx_r15.getIntent(plan_r1), plan_r1, "change plan link clicked");
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.change-tariff-plan"), " ");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_div_1_div_10_a_1_Template, 3, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.planUpgradeUrl !== "/");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_11_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown", function ProductBundleComponent_ng_container_1_div_1_div_11_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.handleManageOptions($event, plan_r1));
    })("click", function ProductBundleComponent_ng_container_1_div_1_div_11_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r20);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r21.manageOptions(plan_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_div_1_div_11_a_1_Template, 3, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.manageOptionUrl !== "/");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_12_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown", function ProductBundleComponent_ng_container_1_div_1_div_12_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.handleManageOptions($event, plan_r1));
    })("click", function ProductBundleComponent_ng_container_1_div_1_div_12_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r26);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r27.manageOptions(plan_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_div_1_div_12_a_1_Template, 3, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r6.manageOptionUrl !== "/");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProductBundleComponent_ng_container_1_div_1_div_14_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      ctx_r30.redirectToMarketingConfigurator(ctx_r30.planUpgradeUrl, "connectivity", plan_r1, "change plan link clicked");
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.change-tariff-plan"), " ");
  }
}
const _c0 = (a0, a1) => ({
  "col-md-6 col-xs-5 text-align--right": a0,
  "col-md-3 col-xs-5 text-align--right": a1
});
function ProductBundleComponent_ng_container_1_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_div_1_div_14_button_1_Template, 3, 3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](2, _c0, !ctx_r7.showManageOptions(plan_r1), ctx_r7.showManageOptions(plan_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r7.planUpgradeUrl !== "/");
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 31);
  }
}
const _c1 = a0 => ({
  product: a0
});
function ProductBundleComponent_ng_container_1_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "tg-product-bundle-child", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ProductBundleComponent_ng_container_1_div_1_div_15_div_3_Template, 1, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r34 = ctx.$implicit;
    const last_r35 = ctx.last;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("productOrOption", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c1, product_r34))("plan", plan_r1)("hasSalesScope", ctx_r8.hasSalesScope)("canManageProductHolding", ctx_r8.canManageProductHolding)("changeTariffPlanUrl", ctx_r8.changeTariffPlanUrl)("manageOptionUrl", ctx_r8.manageOptionUrl)("planUpgradeUrl", ctx_r8.planUpgradeUrl)("intentRequired", ctx_r8.intentRequired)("streamingOptions", ctx_r8.streamingOptions)("componentInstanceID", ctx_r8.componentInstanceID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r35);
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_16_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 31);
  }
}
const _c2 = a0 => ({
  option: a0
});
function ProductBundleComponent_ng_container_1_div_1_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "tg-product-bundle-child", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProductBundleComponent_ng_container_1_div_1_div_16_div_2_div_2_Template, 1, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r39 = ctx.$implicit;
    const last_r40 = ctx.last;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("productOrOption", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c2, option_r39))("plan", plan_r1)("hasSalesScope", ctx_r38.hasSalesScope)("canManageProductHolding", ctx_r38.canManageProductHolding)("changeTariffPlanUrl", ctx_r38.changeTariffPlanUrl)("manageOptionUrl", ctx_r38.manageOptionUrl)("planUpgradeUrl", ctx_r38.planUpgradeUrl)("intentRequired", ctx_r38.intentRequired)("streamingOptions", ctx_r38.streamingOptions)("componentInstanceID", ctx_r38.componentInstanceID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r40);
  }
}
function ProductBundleComponent_ng_container_1_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProductBundleComponent_ng_container_1_div_1_div_16_div_2_Template, 3, 13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", plan_r1.options);
  }
}
function ProductBundleComponent_ng_container_1_div_1_ng_container_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "tg-product-bundle-child", 32)(2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r45 = ctx.$implicit;
    const last_r46 = ctx.last;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3).$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("plan", plan_r1)("productOrOption", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](11, _c2, option_r45))("hasSalesScope", ctx_r44.hasSalesScope)("canManageProductHolding", ctx_r44.canManageProductHolding)("changeTariffPlanUrl", ctx_r44.changeTariffPlanUrl)("manageOptionUrl", ctx_r44.manageOptionUrl)("planUpgradeUrl", ctx_r44.planUpgradeUrl)("intentRequired", ctx_r44.intentRequired)("streamingOptions", ctx_r44.streamingOptions)("componentInstanceID", ctx_r44.componentInstanceID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", last_r46);
  }
}
function ProductBundleComponent_ng_container_1_div_1_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_div_1_ng_container_18_div_1_Template, 3, 13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r10.streamingOptions);
  }
}
function ProductBundleComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProductBundleComponent_ng_container_1_div_1_div_2_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 10)(9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, ProductBundleComponent_ng_container_1_div_1_div_10_Template, 2, 1, "div", 12)(11, ProductBundleComponent_ng_container_1_div_1_div_11_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, ProductBundleComponent_ng_container_1_div_1_div_12_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, ProductBundleComponent_ng_container_1_div_1_div_14_Template, 2, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, ProductBundleComponent_ng_container_1_div_1_div_15_Template, 4, 13, "div", 1)(16, ProductBundleComponent_ng_container_1_div_1_div_16_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ProductBundleComponent_ng_container_1_div_1_ng_container_18_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", plan_r1.isMultipleDTV);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-cy", "bundleTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", plan_r1.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showChangePlan(plan_r1) && ctx_r2.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showManageOptions(plan_r1) && !plan_r1.isProductSuspended() && !(plan_r1.productType === "dtv" && plan_r1.children.length > 0) && ctx_r2.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showManageOptions(plan_r1) && !plan_r1.isProductSuspended() && !(plan_r1.productType === "dtv" && plan_r1.children.length > 0) && ctx_r2.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.showChangePlan(plan_r1) && ctx_r2.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.sortChildren(plan_r1.children));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", plan_r1.options.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.streamingOptions && ctx_r2.streamingOptions.length > 0);
  }
}
function ProductBundleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_div_1_Template, 19, 10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", plan_r1.children.length > 0 && !plan_r1.isC5Bundle());
  }
}
class ProductBundleComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AbstractBaseComponent {
  urlService;
  dataLayerService;
  productOverviewService;
  dialog;
  products = [];
  hasSalesScope = false;
  canManageProductHolding = false;
  changeTariffPlanUrl;
  manageOptionUrl;
  componentInstanceID;
  streamingOptions;
  planUpgradeUrl;
  intentRequired;
  constructor(urlService, dataLayerService, productOverviewService, dialog) {
    super();
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
    this.dialog = dialog;
  }
  showChangePlan(product) {
    return this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  hasActiveOrSuspendedProducts(plan) {
    return plan.children && plan.children.length && plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.ACTIVE_STATUS) || plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.SUSPENDED_STATUS);
  }
  showManageOptions(product) {
    const isPrepaid = product.productInfo?.hasCategory?.(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.PREPAID_MOBILE) || false;
    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  changeTariffPlan(productIdentifier) {
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=care&item=${productIdentifier}`);
  }
  manageOptions(product) {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${product.identifier}&flow=${_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  redirectToMarketingConfigurator(url, intent, plan, eventName) {
    this.handleMarketingConfiguratorAnalytics(eventName);
    if (plan.hasOldSocialTariffDiscount) {
      this.changePlanForSocialTariff(url, intent, plan);
    } else {
      !this.intentRequired || intent === '' ? this.urlService.redirectTo(url + '?installationLocationId=' + plan.locationId) : this.urlService.redirectTo(url + '?intent=' + intent + '&installationLocationId=' + plan.locationId);
    }
  }
  handleMarketingConfiguratorAnalytics(eventName) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__.EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
  }
  changePlanForSocialTariff(url, intent, plan) {
    this.dialog.open(_grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_4__.GrandFatheringSocialTariffNotificationComponent).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe(result => {
      if (result) {
        this.urlService.redirectTo(this.composeSocialTariffDiscountUrl(url, intent, plan));
      }
    });
  }
  composeSocialTariffDiscountUrl(url, intent, plan) {
    return !this.intentRequired || intent === '' ? url + '?installationLocationId=' + plan.locationId : url + '?intent=' + intent + '&installationLocationId=' + plan.locationId;
  }
  getIntent(product) {
    return product.bundleType !== 'WIGO' ? 'connectivity' : '';
  }
  sortChildren(children) {
    return [...children].sort((a, b) => {
      return (a.productSpec?.weight || 0) - (b.productSpec?.weight || 0);
    });
  }
  handleManageOptions(event, product) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_7__.EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(product);
    }
  }
  handleRedirectToMarketingConfigurator(event, url, intent, plan, eventName) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_7__.EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingConfigurator(url, intent, plan, eventName);
    }
  }
  static ɵfac = function ProductBundleComponent_Factory(t) {
    return new (t || ProductBundleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_2__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ProductBundleComponent,
    selectors: [["tg-product-bundle"]],
    inputs: {
      products: "products",
      hasSalesScope: "hasSalesScope",
      canManageProductHolding: "canManageProductHolding",
      changeTariffPlanUrl: "changeTariffPlanUrl",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      streamingOptions: "streamingOptions",
      planUpgradeUrl: "planUpgradeUrl",
      intentRequired: "intentRequired"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "product-overview"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12", "col-sm-12", "m--auto"], ["class", "notification notification--info mb-20", 4, "ngIf"], [1, "content-section", "mb-30"], [1, "content-section__header", "row"], [1, "col-lg-6", "col-md-5", "col-xs-7"], [1, "text-font-family--t7", "text--l"], [1, "col-md-6", "col-12"], [1, "display--flex", "align-items--center", "justify-content--end--md"], ["class", "product-overview__hide-base text-align--right--md", 4, "ngIf"], ["class", "text-align--right pt--n--md pt--m hide-until-md ml--xxxl--md", 4, "ngIf"], ["class", "col-lg-3 col-md-4 col-xs-12 pt--n--md pt--m hide-from-md", 4, "ngIf"], [1, "hide-until-md"], ["class", "product-overview__hide-telenet", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "divider", "divider--s__very-light-grey", "mt--m"], [1, "notification", "notification--info", "mb-20"], [1, "icon", "icon-information-shape", "info"], [1, "product-overview__hide-base", "text-align--right--md"], ["tabindex", "0", "class", "font--body-regular link link--subtle", 3, "keydown", "click", 4, "ngIf"], ["tabindex", "0", 1, "font--body-regular", "link", "link--subtle", 3, "keydown", "click"], [1, "text-align--right", "pt--n--md", "pt--m", "hide-until-md", "ml--xxxl--md"], [1, "col-lg-3", "col-md-4", "col-xs-12", "pt--n--md", "pt--m", "hide-from-md"], [1, "product-overview__hide-telenet", 3, "ngClass"], ["type", "button", "class", "button button--secondary", 3, "click", 4, "ngIf"], ["type", "button", 1, "button", "button--secondary", 3, "click"], [3, "productOrOption", "plan", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "manageOptionUrl", "planUpgradeUrl", "intentRequired", "streamingOptions", "componentInstanceID"], ["class", "divider divider--s__very-light-grey", 4, "ngIf"], [1, "divider", "divider--s__very-light-grey"], [3, "plan", "productOrOption", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "manageOptionUrl", "planUpgradeUrl", "intentRequired", "streamingOptions", "componentInstanceID"], [1, "divider", "divider--s__very-light-grey", 3, "hidden"]],
    template: function ProductBundleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ProductBundleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _product_bundle_child_product_bundle_child_component__WEBPACK_IMPORTED_MODULE_9__.ProductBundleChildComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 90957:
/*!******************************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-c5-bundle/product-c5-bundle-child/product-c5-bundle-child.component.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductC5BundleChildComponent: () => (/* binding */ ProductC5BundleChildComponent)
/* harmony export */ });
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product-overview.service */ 66082);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/product.model */ 72929);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/product-overview.constant */ 66191);
/* harmony import */ var _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/product-icon.constant */ 73660);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/events.constant */ 27044);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash-es */ 48717);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/phone-number.pipe */ 3146);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../product-extra-options/product-extra-options.component */ 11617);
/* harmony import */ var _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../product-included-options/product-included-options.component */ 22591);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../product-options-specifications/product-options-specifications.component */ 73766);
/* harmony import */ var _product_level_specifications_product_level_specifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../product-level-specifications/product-level-specifications.component */ 37762);
/* harmony import */ var _product_c5_mobile_specifications_product_c5_mobile_specifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product-c5-mobile-specifications/product-c5-mobile-specifications.component */ 10415);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_15__);





















function ProductC5BundleChildComponent_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("(", ctx_r19.product.options.length, ")");
  }
}
function ProductC5BundleChildComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ProductC5BundleChildComponent_div_7_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "c5SectionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (ctx_r0.product.productSpec == null ? null : ctx_r0.product.productSpec.name) || ctx_r0.product.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r0.product.productType === "phone2go");
  }
}
function ProductC5BundleChildComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "c5SectionType");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (ctx_r1.product.experience == null ? null : ctx_r1.product.experience.productInfo == null ? null : ctx_r1.product.experience.productInfo.name) || (ctx_r1.product.productSpec == null ? null : ctx_r1.product.productSpec.name), " ");
  }
}
function ProductC5BundleChildComponent_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.data-sim-active"), " ");
  }
}
function ProductC5BundleChildComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 35)(1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.esim-active"), " ");
  }
}
function ProductC5BundleChildComponent_div_9_span_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "unlimitedLineText");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", ctx_r23.product.unlimitedLines == null ? null : ctx_r23.product.unlimitedLines.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "ng.product-overview.lbl.unlimited-line"), "");
  }
}
function ProductC5BundleChildComponent_div_9_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function ProductC5BundleChildComponent_div_9_span_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "limitedLineText");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", ctx_r25.product.limitedLines == null ? null : ctx_r25.product.limitedLines.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 3, "ng.product-overview.lbl.limited-line"), " ");
  }
}
function ProductC5BundleChildComponent_div_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_9_span_4_span_1_Template, 3, 5, "span", 9)(2, ProductC5BundleChildComponent_div_9_span_4_span_2_Template, 2, 0, "span", 9)(3, ProductC5BundleChildComponent_div_9_span_4_span_3_Template, 3, 5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r22.product.unlimitedLines == null ? null : ctx_r22.product.unlimitedLines.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r22.product.unlimitedLines == null ? null : ctx_r22.product.unlimitedLines.length) && (ctx_r22.product.limitedLines == null ? null : ctx_r22.product.limitedLines.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r22.product.limitedLines == null ? null : ctx_r22.product.limitedLines.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "amountOfunlimitedLines");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 5, "ng.product-overview.lbl.numbers"));
  }
}
const _c0 = a0 => ({
  "ml--xs--md pt--xxs pt--n--md": a0
});
function ProductC5BundleChildComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_9_span_1_Template, 3, 3, "span", 31)(2, ProductC5BundleChildComponent_div_9_div_2_Template, 4, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProductC5BundleChildComponent_div_9_span_4_Template, 7, 7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r2.product.options == null ? null : ctx_r2.product.options[0] == null ? null : ctx_r2.product.options[0].status) === "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.product.eSimStatus === "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](4, _c0, ctx_r2.product.options[0] && ctx_r2.product.options[0].status === "ACTIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.product.mobileIdentifier == null ? null : ctx_r2.product.mobileIdentifier.length);
  }
}
function ProductC5BundleChildComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "activePhoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, ctx_r26.product.identifier), " ");
  }
}
function ProductC5BundleChildComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_10_div_1_Template, 3, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r3.product.status === "ACTIVE");
  }
}
function ProductC5BundleChildComponent_div_11_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.active"), " ");
  }
}
function ProductC5BundleChildComponent_div_11_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.not-active"), " ");
  }
}
function ProductC5BundleChildComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 30)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ProductC5BundleChildComponent_div_11_div_1_span_5_Template, 3, 3, "span", 40)(6, ProductC5BundleChildComponent_div_11_div_1_span_6_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const phoneToGo_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, phoneToGo_r28.phoneNumber), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", phoneToGo_r28.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !phoneToGo_r28.active);
  }
}
function ProductC5BundleChildComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_11_div_1_Template, 7, 5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r4.phoneToGoNumbers);
  }
}
function ProductC5BundleChildComponent_div_12_span_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "notRequestedStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "ng.product-overview.lbl.not-requested"), " ");
  }
}
function ProductC5BundleChildComponent_div_12_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "productNotActiveStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "ng.product-overview.lbl.not-active"), " ");
  }
}
const _c1 = a0 => ({
  "status-indicator--negative": a0
});
function ProductC5BundleChildComponent_div_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_12_span_1_span_1_Template, 3, 4, "span", 9)(2, ProductC5BundleChildComponent_div_12_span_1_span_2_Template, 3, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c1, ctx_r31.product.productType !== "mobile" && ctx_r31.product.productType !== "telephone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r31.product.productType === "mobile" || ctx_r31.product.productType === "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r31.product.productType !== "mobile" && ctx_r31.product.productType !== "telephone");
  }
}
function ProductC5BundleChildComponent_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.active"), " ");
  }
}
function ProductC5BundleChildComponent_div_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.status-suspended"), " ");
  }
}
function ProductC5BundleChildComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_12_span_1_Template, 3, 5, "span", 42)(2, ProductC5BundleChildComponent_div_12_span_2_Template, 3, 3, "span", 40)(3, ProductC5BundleChildComponent_div_12_span_3_Template, 3, 3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.product.status === "NOT_ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.product.status === "ACTIVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.product.isProductSuspended());
  }
}
function ProductC5BundleChildComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.status-activation-in-progress"), " ");
  }
}
function ProductC5BundleChildComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.status-disconnection-in-progress"), " ");
  }
}
function ProductC5BundleChildComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-cy", "modificationInProgressStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "ng.product-overview.lbl.status-modification-in-progress"), " ");
  }
}
function ProductC5BundleChildComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lbl.status-suspended"), " ");
  }
}
function ProductC5BundleChildComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_18_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.handleRedirectToMarketingConfigurator($event, ctx_r36.changeDataPlanUrl, "mobile", ctx_r36.plan.locationId, "change mobile number or data plan clicked"));
    })("click", function ProductC5BundleChildComponent_div_18_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r38.redirectToMarketingConfigurator(ctx_r38.changeDataPlanUrl, "mobile", ctx_r38.plan.locationId, "change mobile number or data plan clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 1, "ng.product-overview.lnk.change-data-plan"));
  }
}
function ProductC5BundleChildComponent_div_19_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductC5BundleChildComponent_div_19_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.activate-option"), " ");
  }
}
function ProductC5BundleChildComponent_div_19_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.upgrade-option"), " ");
  }
}
function ProductC5BundleChildComponent_div_19_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_19_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r44.handleManageOptions($event, ctx_r44.plan.identifier, ctx_r44.product, true));
    })("click", function ProductC5BundleChildComponent_div_19_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      ctx_r46.manageOptions(ctx_r46.plan.identifier, ctx_r46.product, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_19_a_1_span_1_Template, 3, 3, "span", 9)(2, ProductC5BundleChildComponent_div_19_a_1_span_2_Template, 3, 3, "span", 9)(3, ProductC5BundleChildComponent_div_19_a_1_span_3_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r39.product.status === "ACTIVE" && !ctx_r39.product.upgradePossibleTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r39.product.status === "NOT_ACTIVE" || ctx_r39.product.status === "DISCONNECTED") && !ctx_r39.product.upgradePossibleTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r39.product.status === "ACTIVE" && ctx_r39.product.upgradePossibleTo);
  }
}
function ProductC5BundleChildComponent_div_19_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 52)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("href", ctx_r40.managePhone2GoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, "ng.product-overview.lnk.manage-phone2go"));
  }
}
function ProductC5BundleChildComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_19_a_1_Template, 4, 3, "a", 49)(2, ProductC5BundleChildComponent_div_19_a_2_Template, 4, 4, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r11.manageOptionUrl !== "/" && ctx_r11.product.productType !== "phone2go");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r11.managePhone2GoUrl && ctx_r11.product.productType === "phone2go");
  }
}
function ProductC5BundleChildComponent_div_20_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_20_div_1_div_1_div_1_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r53.handleRedirectToMarketingConfigurator($event, ctx_r53.planUpgradeUrl, "marketing", ctx_r53.plan.locationId, "add sim link clicked", ctx_r53.plan.bundleType));
    })("click", function ProductC5BundleChildComponent_div_20_div_1_div_1_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r55.redirectToMarketingConfigurator(ctx_r55.planUpgradeUrl, "marketing", ctx_r55.plan.locationId, "add sim link clicked", ctx_r55.plan.bundleType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-sim"), " ");
  }
}
function ProductC5BundleChildComponent_div_20_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_20_div_1_div_1_div_2_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r56.handleRedirectToOrderSimSalesFlow($event, ctx_r56.changeTariffPlanUrl, "marketing", "add-sim", ctx_r56.plan.identifier, ctx_r56.plan.productType, ctx_r56.plan.locationId, "add sim link clicked"));
    })("click", function ProductC5BundleChildComponent_div_20_div_1_div_1_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r58.redirectToOrderSimSalesFlow(ctx_r58.changeTariffPlanUrl, "marketing", "add-sim", ctx_r58.plan.identifier, ctx_r58.plan.productType, ctx_r58.plan.locationId, "add sim link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-sim"), " ");
  }
}
function ProductC5BundleChildComponent_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_20_div_1_div_1_div_1_Template, 4, 3, "div", 9)(2, ProductC5BundleChildComponent_div_20_div_1_div_1_div_2_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r50.plan.bundleType === "Connect 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r50.plan.bundleType !== "Connect 5");
  }
}
function ProductC5BundleChildComponent_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_20_div_1_div_1_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r47.product.mobileIdentifier && ctx_r47.product.bundleMaxlines && ctx_r47.product.mobileIdentifier.length < ctx_r47.product.bundleMaxlines);
  }
}
function ProductC5BundleChildComponent_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 54)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_20_div_2_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r59.handleRedirectToMarketingConfigurator($event, ctx_r59.planUpgradeUrl, "optins", ctx_r59.plan.locationId, "add fixed line button clicked"));
    })("click", function ProductC5BundleChildComponent_div_20_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r61.redirectToMarketingConfigurator(ctx_r61.planUpgradeUrl, "optins", ctx_r61.plan.locationId, "add fixed line button clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-fixed-telephone"), " ");
  }
}
function ProductC5BundleChildComponent_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 54)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_20_div_3_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r62.handleRedirectToMarketingConfigurator($event, ctx_r62.planUpgradeUrl, "optins", ctx_r62.plan.locationId, "add sim link clicked"));
    })("click", function ProductC5BundleChildComponent_div_20_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r64.redirectToMarketingConfigurator(ctx_r64.planUpgradeUrl, "optins", ctx_r64.plan.locationId, "add sim link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-data-sim"), " ");
  }
}
function ProductC5BundleChildComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_20_div_1_Template, 2, 1, "div", 53)(2, ProductC5BundleChildComponent_div_20_div_2_Template, 4, 3, "div", 53)(3, ProductC5BundleChildComponent_div_20_div_3_Template, 4, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r12.section.type !== "includedOptions" && ctx_r12.product.productType === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r12.section.type === "includedOptions" && ctx_r12.product.productType === "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r12.section.type === "includedOptions" && ctx_r12.product.productType === "mobile");
  }
}
function ProductC5BundleChildComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 55)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_23_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r65.handleRedirectToMarketingConfigurator($event, ctx_r65.changeDataPlanUrl, "mobile", ctx_r65.plan.locationId, "change mobile number or data plan clicked"));
    })("click", function ProductC5BundleChildComponent_div_23_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r67.redirectToMarketingConfigurator(ctx_r67.changeDataPlanUrl, "mobile", ctx_r67.plan.locationId, "change mobile number or data plan clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 1, "ng.product-overview.lnk.change-data-plan"));
  }
}
function ProductC5BundleChildComponent_div_25_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_25_div_1_div_1_div_1_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r74.handleRedirectToMarketingConfigurator($event, ctx_r74.planUpgradeUrl, "marketing", ctx_r74.plan.locationId, "add sim link clicked", ctx_r74.plan.bundleType));
    })("click", function ProductC5BundleChildComponent_div_25_div_1_div_1_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r75);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r76.redirectToMarketingConfigurator(ctx_r76.planUpgradeUrl, "marketing", ctx_r76.plan.locationId, "add sim link clicked", ctx_r76.plan.bundleType));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-sim"), " ");
  }
}
function ProductC5BundleChildComponent_div_25_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_25_div_1_div_1_div_2_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r77.handleRedirectToOrderSimSalesFlow($event, ctx_r77.changeTariffPlanUrl, "marketing", "add-sim", ctx_r77.plan.identifier, ctx_r77.plan.productType, ctx_r77.plan.locationId, "add sim link clicked"));
    })("click", function ProductC5BundleChildComponent_div_25_div_1_div_1_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r78);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r79.redirectToOrderSimSalesFlow(ctx_r79.changeTariffPlanUrl, "marketing", "add-sim", ctx_r79.plan.identifier, ctx_r79.plan.productType, ctx_r79.plan.locationId, "add sim link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-sim"), " ");
  }
}
function ProductC5BundleChildComponent_div_25_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_25_div_1_div_1_div_1_Template, 4, 3, "div", 9)(2, ProductC5BundleChildComponent_div_25_div_1_div_1_div_2_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r71.plan.bundleType === "Connect 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r71.plan.bundleType !== "Connect 5");
  }
}
function ProductC5BundleChildComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_25_div_1_div_1_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r68.product.mobileIdentifier && ctx_r68.product.bundleMaxlines && ctx_r68.product.mobileIdentifier.length < ctx_r68.product.bundleMaxlines);
  }
}
function ProductC5BundleChildComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 58)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_25_div_2_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r80.handleRedirectToMarketingConfigurator($event, ctx_r80.planUpgradeUrl, "optins", ctx_r80.plan.locationId, "add fixed line button clicked"));
    })("click", function ProductC5BundleChildComponent_div_25_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r81);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r82.redirectToMarketingConfigurator(ctx_r82.planUpgradeUrl, "optins", ctx_r82.plan.locationId, "add fixed line button clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-fixed-telephone"), " ");
  }
}
function ProductC5BundleChildComponent_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 58)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_25_div_3_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r83.handleRedirectToMarketingConfigurator($event, ctx_r83.planUpgradeUrl, "optins", ctx_r83.plan.locationId, "add sim link clicked"));
    })("click", function ProductC5BundleChildComponent_div_25_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r85.redirectToMarketingConfigurator(ctx_r85.planUpgradeUrl, "optins", ctx_r85.plan.locationId, "add sim link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lnk.order-data-sim"), " ");
  }
}
const _c2 = a0 => ({
  "mr-0": a0
});
function ProductC5BundleChildComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_25_div_1_Template, 2, 1, "div", 57)(2, ProductC5BundleChildComponent_div_25_div_2_Template, 4, 3, "div", 57)(3, ProductC5BundleChildComponent_div_25_div_3_Template, 4, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](4, _c2, ctx_r14.showManageOptions(ctx_r14.plan) && ctx_r14.section.type === "includedOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.section.type !== "includedOptions" && ctx_r14.product.productType === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.section.type === "includedOptions" && ctx_r14.product.productType === "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r14.section.type === "includedOptions" && ctx_r14.product.productType === "mobile");
  }
}
function ProductC5BundleChildComponent_div_26_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductC5BundleChildComponent_div_26_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductC5BundleChildComponent_div_26_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.activate-option"), " ");
  }
}
function ProductC5BundleChildComponent_div_26_a_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.upgrade-option"), " ");
  }
}
function ProductC5BundleChildComponent_div_26_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_div_26_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r92.handleManageOptions($event, ctx_r92.plan.identifier, ctx_r92.product, true));
    })("click", function ProductC5BundleChildComponent_div_26_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r93);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      ctx_r94.manageOptions(ctx_r94.plan.identifier, ctx_r94.product, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_26_a_1_span_1_Template, 3, 3, "span", 9)(2, ProductC5BundleChildComponent_div_26_a_1_span_2_Template, 3, 3, "span", 9)(3, ProductC5BundleChildComponent_div_26_a_1_span_3_Template, 3, 3, "span", 9)(4, ProductC5BundleChildComponent_div_26_a_1_span_4_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r86.product.status === "ACTIVE" && !ctx_r86.product.upgradePossibleTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r86.product.status === "ACTIVATION_PASSED_PONR" && ctx_r86.isNetflixProductActivationInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", (ctx_r86.product.status === "NOT_ACTIVE" || ctx_r86.product.status === "DISCONNECTED") && !ctx_r86.product.upgradePossibleTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r86.product.status === "ACTIVE" && ctx_r86.product.upgradePossibleTo);
  }
}
function ProductC5BundleChildComponent_div_26_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 52)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("href", ctx_r87.managePhone2GoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, "ng.product-overview.lnk.manage-phone2go"));
  }
}
function ProductC5BundleChildComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_26_a_1_Template, 5, 4, "a", 49)(2, ProductC5BundleChildComponent_div_26_a_2_Template, 4, 4, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r15.manageOptionUrl !== "/" && ctx_r15.product.productType !== "phone2go" && !ctx_r15.plan.isProductActivationInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r15.managePhone2GoUrl && ctx_r15.product.productType === "phone2go");
  }
}
function ProductC5BundleChildComponent_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 60);
  }
}
function ProductC5BundleChildComponent_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 61);
  }
}
const _c3 = a0 => ({
  amount: a0
});
const _c4 = a0 => ({
  unit: a0
});
function ProductC5BundleChildComponent_div_38_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 66)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 67)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rate_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 3, "ng.product-overview.lbl." + _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](4, 5, rate_r103.type)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](8, 7, "ng.product-overview.text.specifications-for-base-zero-value", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](13, _c3, rate_r103.cost)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](12, 10, "ng.product-overview.text.specifications-for-base-zero-unit", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](15, _c4, rate_r103.unit)), " ");
  }
}
const _c5 = a0 => ({
  "pre-paid": a0
});
function ProductC5BundleChildComponent_div_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 64)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ProductC5BundleChildComponent_div_38_div_4_div_3_Template, 13, 17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](3, _c5, ctx_r95.product.productInfo.hasCategory(ctx_r95.PREPAID_MOBILE)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r95.product.productInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r95.plan.productInfo.rates);
  }
}
function ProductC5BundleChildComponent_div_38_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "tg-product-c5-mobile-specifications", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("c5product", ctx_r104.product)("plan", ctx_r104.plan);
  }
}
function ProductC5BundleChildComponent_div_38_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "tg-product-level-specifications", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", ctx_r105.product)("isBundle", true);
  }
}
function ProductC5BundleChildComponent_div_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_38_div_5_div_1_Template, 2, 2, "div", 9)(2, ProductC5BundleChildComponent_div_38_div_5_div_2_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r96.product.productType === "mobile" && (ctx_r96.product.mobileIdentifier == null ? null : ctx_r96.product.mobileIdentifier.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !(ctx_r96.product.productType === "mobile" && (ctx_r96.product.mobileIdentifier == null ? null : ctx_r96.product.mobileIdentifier.length)));
  }
}
function ProductC5BundleChildComponent_div_38_div_6_div_1_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, "ng.product-overview.lbl.monetary-amount", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](4, _c3, handset_r107.contract.price == null ? null : handset_r107.contract.price.earlyTerminationFee)), " ");
  }
}
function ProductC5BundleChildComponent_div_38_div_6_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 72)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProductC5BundleChildComponent_div_38_div_6_div_1_div_21_div_4_Template, 3, 6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 2, "ng.product-overview.text.contract-termination-fee"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", handset_r107.contract.price == null ? null : handset_r107.contract.price.earlyTerminationFee);
  }
}
function ProductC5BundleChildComponent_div_38_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 72)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 67)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 72)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, ProductC5BundleChildComponent_div_38_div_6_div_1_div_21_Template, 5, 4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r107 = ctx.$implicit;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 7, "ng.product-overview.text.contract-information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 9, "ng.product-overview.text.contract-duration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](handset_r107.contract.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](13, 11, "ng.product-overview.lbl.months"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 13, "ng.product-overview.text.contract-obligation-end-date"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](20, 15, handset_r107.contract.obligationEndDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r106.product.hasValidPrice(handset_r107.contract.price == null ? null : handset_r107.contract.price.earlyTerminationFee));
  }
}
function ProductC5BundleChildComponent_div_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, ProductC5BundleChildComponent_div_38_div_6_div_1_Template, 22, 18, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r97.product.handsets);
  }
}
function ProductC5BundleChildComponent_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "tg-product-options-specifications", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("services", ctx_r98.product.productInfo.services);
  }
}
function ProductC5BundleChildComponent_div_38_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "tg-product-included-options", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", ctx_r99.product);
  }
}
function ProductC5BundleChildComponent_div_38_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "tg-product-extra-options", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", ctx_r100.product);
  }
}
function ProductC5BundleChildComponent_div_38_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.phone2go-feature"));
  }
}
function ProductC5BundleChildComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 62)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ProductC5BundleChildComponent_div_38_div_4_Template, 4, 5, "div", 63)(5, ProductC5BundleChildComponent_div_38_div_5_Template, 3, 2, "div", 9)(6, ProductC5BundleChildComponent_div_38_div_6_Template, 2, 1, "div", 9)(7, ProductC5BundleChildComponent_div_38_div_7_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ProductC5BundleChildComponent_div_38_div_8_Template, 2, 1, "div", 9)(9, ProductC5BundleChildComponent_div_38_div_9_Template, 2, 1, "div", 9)(10, ProductC5BundleChildComponent_div_38_div_10_Template, 4, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r18.plan.productInfo.isShowRates());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r18.plan.productInfo.isShowRates() && (ctx_r18.plan.productInfo.services == null ? null : ctx_r18.plan.productInfo.services.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r18.plan.handsets.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r18.product.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !(ctx_r18.product.productType === "mobile" && (ctx_r18.product.mobileIdentifier == null ? null : ctx_r18.product.mobileIdentifier.length)) && (ctx_r18.product.hasIncludedOptions || (ctx_r18.product.contentPacks == null ? null : ctx_r18.product.contentPacks.length)));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r18.product.productType !== "phone2go" && ctx_r18.product.hasExtraOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r18.product.productType === "phone2go");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](14, 8, "ng.product-overview.lbl.phone2go-feature"));
  }
}
const _c6 = (a0, a1) => ({
  "col-md-7": a0,
  "col-md-12": a1
});
class ProductC5BundleChildComponent {
  urlService;
  dataLayerService;
  productOverviewService;
  set productOrOption({
    product,
    option
  }) {
    if (product) {
      this.product = product;
    }
    if (!product && option) {
      /// STILLTOCHECK
      const derefdOption = (0,lodash_es__WEBPACK_IMPORTED_MODULE_16__["default"])(option);
      this.product = new _models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
      this.product.productInfo = derefdOption.productInfo;
      this.product.options = [derefdOption];
      this.product.status = derefdOption.status;
      this.product.productType = derefdOption.productType || '';
      this.product.productInfo.services?.forEach(serv => {
        serv.specifications?.forEach(spec => spec.productType = derefdOption.productType);
      });
    }
    // This is to use them properly in the 'getBundleSpecifications' function
    // STILLTOCHECK we should rethink the whole specifications stuff, to do it on a higher level
    this.specifications = this.product.productInfo.getSortedSpecifications();
  }
  section;
  phoneToGoNumbers;
  intentRequired;
  componentInstanceID;
  canManageProductHolding = false;
  plan;
  manageOptionUrl;
  planUpgradeUrl;
  changeDataPlanUrl;
  managePhone2GoUrl;
  changeTariffPlanUrl;
  product;
  specifications;
  showFeature = false;
  PREPAID_MOBILE = _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.PREPAID_MOBILE;
  constructor(urlService, dataLayerService, productOverviewService) {
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
  }
  getProductIcon() {
    return this.productOverviewService.getProductIcon(this.product);
  }
  redirectToMarketingConfigurator(url, intent, locationId, eventName, bundleType) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    if (bundleType === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.BUNDLE_TYPE_C5 && !this.intentRequired) {
      this.urlService.redirectTo(url + '?installationLocationId=' + locationId);
    } else {
      this.urlService.redirectTo(url + '?intent=' + intent + '&installationLocationId=' + locationId);
    }
  }
  showManageOptionsButton(plan, section, product) {
    return this.showManageOptions(plan) && section.type !== 'entertainment' && section.type !== 'includedOptions' || section.type === 'includedOptions' && product.productType !== 'telephone' && product.productType !== 'mobile' || section.type === 'streaming';
  }
  showManageOptions(product) {
    let isPrepaid = false;
    if (product.productInfo.categories?.length) {
      isPrepaid = product.productInfo.categories.some(item => {
        return item.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }
    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  manageOptions(planIdentifier, product, isBundle) {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${planIdentifier}&flow=${_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (isBundle) {
      url += product.productType ? '&producttype=bundle&category=' + product.productType : '&producttype=bundle';
    } else if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  hasActiveOrSuspendedProducts(plan) {
    return plan.children && plan.children.length && plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.ACTIVE_STATUS) || plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewConstants.SUSPENDED_STATUS);
  }
  redirectToOrderSimSalesFlow(url, flow, intent, identifier, productType, locationId, eventName) {
    const eventInfoData = this.dataLayerService.createEventInfo(eventName, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    this.urlService.redirectTo(url + '?flow=' + flow + '&intent=' + intent + '&item=' + identifier + '&producttype=' + productType + '&locationId=' + locationId);
  }
  shouldDisplayChangeDataPlan() {
    return this.changeDataPlanUrl && this.isNewOneBundle();
  }
  isNewOneBundle() {
    const bundleSpecs = this.getBundleSpecifications();
    return bundleSpecs && this.hasBothLimitedAndUnlimitedSpecs(bundleSpecs);
  }
  getBundleSpecifications() {
    return this.specifications?.filter(spec => {
      switch (this.product.productType) {
        case 'internet':
          return spec.serviceType === 'fixed_internet';
        case 'mobile':
          return this.filterMobileSpecs(spec);
        case 'dtv':
          return spec.serviceType === 'dtv';
        case 'telephone':
          return spec.serviceType === 'fixed_calling';
        case 'streaming':
          return spec.serviceType === 'streaming';
        default:
          return false;
      }
    });
  }
  isNetflixProductActivationInProgress() {
    return (this.product.productInfo.productId?.includes(_constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_5__.ProductIconConstants.STREAMING_PRODUCT_PREFIX) || false) && this.product.isProductActivationInProgress();
  }
  filterMobileSpecs(spec) {
    if (this.product.productInfo.productType === 'data-only-mobile-line') {
      return spec.serviceType === 'mobile_internet';
    }
    return spec.serviceType === 'mobile_internet' || spec.serviceType === 'mobile_calling';
  }
  hasBothLimitedAndUnlimitedSpecs(specs) {
    const limitedIndex = specs.findIndex(spec => spec.labelKey.includes('mobile-data-allowance-limited'));
    const unlimitedIndex = specs.findIndex(spec => spec.labelKey.endsWith('mobile-data-allowance-unlimited'));
    return limitedIndex !== -1 && unlimitedIndex !== -1;
  }
  addPlanDetailViewEventInDataLayer() {
    if (this.showFeature && this.product.productInfo) {
      const eventInfoData = this.dataLayerService.createEventInfo(_constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_NAME_TARIFF_PLAN, _constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_TYPE_VIEW_PRODUCT_DETAILS);
      const attributes = {};
      if (this.product.productInfo.productType === 'bundle') {
        const spec = this.product.productSpec;
        attributes[_constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(spec);
      } else {
        attributes[_constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(this.product.productInfo);
      }
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID, attributes);
    }
  }
  getViewedProducts(productInfo) {
    if (productInfo) {
      const product = {
        productInfo: {
          productType: productInfo.productType,
          productID: productInfo.externalProductCode
        }
      };
      return [product];
    }
    return [];
  }
  onKeydown(event) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_KEY_ENTER) {
      this.showFeature = !this.showFeature;
      this.addPlanDetailViewEventInDataLayer();
    }
  }
  handleRedirectToMarketingConfigurator(event, url, intent, locationId, eventName, bundleType) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingConfigurator(url, intent, locationId, eventName, bundleType);
    }
  }
  handleManageOptions(event, planIdentifier, product, isBundle) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(planIdentifier, product, isBundle);
    }
  }
  handleRedirectToOrderSimSalesFlow(event, url, flow, intent, identifier, productType, locationId, eventName) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_6__.EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToOrderSimSalesFlow(url, flow, intent, identifier, productType, locationId, eventName);
    }
  }
  static ɵfac = function ProductC5BundleChildComponent_Factory(t) {
    return new (t || ProductC5BundleChildComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_3__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: ProductC5BundleChildComponent,
    selectors: [["tg-product-c5-bundle-child"]],
    inputs: {
      productOrOption: "productOrOption",
      section: "section",
      phoneToGoNumbers: "phoneToGoNumbers",
      intentRequired: "intentRequired",
      componentInstanceID: "componentInstanceID",
      canManageProductHolding: "canManageProductHolding",
      plan: "plan",
      manageOptionUrl: "manageOptionUrl",
      planUpgradeUrl: "planUpgradeUrl",
      changeDataPlanUrl: "changeDataPlanUrl",
      managePhone2GoUrl: "managePhone2GoUrl",
      changeTariffPlanUrl: "changeTariffPlanUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵStandaloneFeature"]],
    decls: 39,
    vars: 31,
    consts: [[1, "content-section__details"], [1, "row", "display--flex", "align-items--center"], [1, "col-md-7", "col-xs-12", "display--flex", "align-items--center"], [1, "product-overview__content-section__image", "display--flex", "align-items--center", "justify-content--center"], [1, "icon", "icon-md", "text-weight--xxs", 3, "ngClass"], [1, "display--flex--md", "align-items--center--md"], [1, "ml--m"], ["class", "text-font-family--t7 text--xxm product-overview__heading", 4, "ngIf"], ["class", "display--flex--md align-items--center", 4, "ngIf"], [4, "ngIf"], ["class", "pl--m pt--xxxs pt--n--md", 4, "ngIf"], [1, "pl--m", "pt--xxxs", "pt--n--md"], ["class", "status-indicator status-indicator--warning", 4, "ngIf"], ["class", "status-indicator status-indicator--negative", 4, "ngIf"], ["class", "text-align--right--md hide-from-md pl--m pt--xxs", 4, "ngIf"], [1, "col-md-5", "col-xs-12"], [1, "row"], ["class", "col-md-5 display--flex align-items--center justify-content--end--md", 4, "ngIf"], [1, "display--flex", "align-items--center", "justify-content--end--md", 3, "ngClass"], ["class", "text-align--right", 3, "ngClass", 4, "ngIf"], ["class", "text-align--right hide-until-md ml--xxxl--md", 4, "ngIf"], [1, "col-xs-12"], [1, "background-shade_04", "p--l", "mt--m"], [1, "display--flex", "justify-content--between", "cursor--pointer", 3, "click"], [1, "text-font-family--t7"], ["tabindex", "0", "aria-controls", "c5_bundle_product_info", 3, "keydown"], ["class", "icon-chevron-down", 4, "ngIf"], ["class", "icon-chevron-up", 4, "ngIf"], ["id", "c5_bundle_product_info", 4, "ngIf"], [1, "text-font-family--t7", "text--xxm", "product-overview__heading"], [1, "display--flex--md", "align-items--center"], ["class", "status-indicator status-indicator--positive mt--xxs", 4, "ngIf"], ["class", "mr--xxs--md mb--n--md mb--xxs mt--xxs", 4, "ngIf"], [1, "text--s", 3, "ngClass"], [1, "status-indicator", "status-indicator--positive", "mt--xxs"], [1, "mr--xxs--md", "mb--n--md", "mb--xxs", "mt--xxs"], [1, "status-indicator", "status-indicator--positive"], ["class", "text--s", 4, "ngIf"], [1, "text--s"], ["class", "display--flex--md align-items--center", 4, "ngFor", "ngForOf"], ["class", "status-indicator status-indicator--positive", 4, "ngIf"], [1, "status-indicator", "status-indicator--negative"], ["class", "status-indicator", 3, "ngClass", 4, "ngIf"], ["class", "status-indicator", 4, "ngIf"], [1, "status-indicator", 3, "ngClass"], [1, "status-indicator"], [1, "status-indicator", "status-indicator--warning"], [1, "text-align--right--md", "hide-from-md", "pl--m", "pt--xxs"], ["tabindex", "0", 1, "text--xm--md", "text--m", "link", "link--subtle", 3, "keydown", "click"], ["tabindex", "0", "class", "font--body-regular link link--subtle", 3, "keydown", "click", 4, "ngIf"], ["class", "font--body-regular", 3, "href", 4, "ngIf"], ["tabindex", "0", 1, "font--body-regular", "link", "link--subtle", 3, "keydown", "click"], [1, "font--body-regular", 3, "href"], ["class", "hide-from-md pt-5 pl--m", 4, "ngIf"], [1, "hide-from-md", "pt-5", "pl--m"], [1, "col-md-5", "display--flex", "align-items--center", "justify-content--end--md"], [1, "text-align--right", 3, "ngClass"], ["class", "hide-until-md", 4, "ngIf"], [1, "hide-until-md"], [1, "text-align--right", "hide-until-md", "ml--xxxl--md"], [1, "icon-chevron-down"], [1, "icon-chevron-up"], ["id", "c5_bundle_product_info"], ["class", "pt--xs", 3, "ngClass", 4, "ngIf"], [1, "pt--xs", 3, "ngClass"], ["class", "display--flex--md justify-content--between", 4, "ngFor", "ngForOf"], [1, "display--flex--md", "justify-content--between"], [1, "text-weight--l"], [3, "c5product", "plan"], [3, "product", "isBundle"], [4, "ngFor", "ngForOf"], [1, "text--s", "text-weight--l"], [1, "display--flex--md", "justify-content--between", "pt--m"], ["class", "display--flex--md justify-content--between pt--m", 4, "ngIf"], ["class", "text-weight--l", 4, "ngIf"], [3, "services"], [3, "product"]],
    template: function ProductC5BundleChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ProductC5BundleChildComponent_div_7_Template, 3, 3, "div", 7)(8, ProductC5BundleChildComponent_div_8_Template, 2, 2, "div", 7)(9, ProductC5BundleChildComponent_div_9_Template, 5, 6, "div", 8)(10, ProductC5BundleChildComponent_div_10_Template, 2, 1, "div", 8)(11, ProductC5BundleChildComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, ProductC5BundleChildComponent_div_12_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, ProductC5BundleChildComponent_span_14_Template, 3, 3, "span", 12)(15, ProductC5BundleChildComponent_span_15_Template, 3, 3, "span", 12)(16, ProductC5BundleChildComponent_span_16_Template, 3, 4, "span", 12)(17, ProductC5BundleChildComponent_span_17_Template, 3, 3, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, ProductC5BundleChildComponent_div_18_Template, 5, 3, "div", 14)(19, ProductC5BundleChildComponent_div_19_Template, 3, 2, "div", 14)(20, ProductC5BundleChildComponent_div_20_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 15)(22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, ProductC5BundleChildComponent_div_23_Template, 5, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, ProductC5BundleChildComponent_div_25_Template, 4, 6, "div", 19)(26, ProductC5BundleChildComponent_div_26_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 16)(28, "div", 21)(29, "div", 22)(30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ProductC5BundleChildComponent_Template_div_click_30_listener() {
          ctx.showFeature = !ctx.showFeature;
          return ctx.addPlanDetailViewEventInDataLayer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("keydown", function ProductC5BundleChildComponent_Template_a_keydown_34_listener($event) {
          return ctx.onKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](36, ProductC5BundleChildComponent_i_36_Template, 1, 0, "i", 26)(37, ProductC5BundleChildComponent_i_37_Template, 1, 0, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](38, ProductC5BundleChildComponent_div_38_Template, 15, 10, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", "icon-" + ctx.getProductIcon());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.section.type !== "entertainment");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.section.type === "entertainment");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.productType === "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.productType === "telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.productType === "phone2go");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.section.type === "includedOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.isProductActivationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.isProductDisconnectionInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.isProductModificationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product.isProductSuspended());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.shouldDisplayChangeDataPlan());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showManageOptionsButton(ctx.plan, ctx.section, ctx.product) && (ctx.product.status === "ACTIVE" || ctx.product.status === "NOT_ACTIVE" || ctx.product.status === "DISCONNECTED") && !ctx.plan.isProductActivationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.hasActiveOrSuspendedProducts(ctx.plan));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.shouldDisplayChangeDataPlan());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](28, _c6, ctx.shouldDisplayChangeDataPlan(), !ctx.shouldDisplayChangeDataPlan()));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.hasActiveOrSuspendedProducts(ctx.plan));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showManageOptionsButton(ctx.plan, ctx.section, ctx.product) && (ctx.product.status === "ACTIVE" || ctx.product.status === "NOT_ACTIVE" || ctx.product.status === "DISCONNECTED" || ctx.product.status === "ACTIVATION_PASSED_PONR") && !ctx.plan.isProductActivationInProgress());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](33, 24, "ng.product-overview.lbl.feature-included"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("aria-expanded", ctx.showFeature ? "true" : "false")("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](35, 26, "ng.product-overview.lbl.feature-included"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.showFeature);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showFeature);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showFeature);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgFor, _product_c5_mobile_specifications_product_c5_mobile_specifications_component__WEBPACK_IMPORTED_MODULE_13__.ProductC5MobileSpecificationsComponent, _product_level_specifications_product_level_specifications_component__WEBPACK_IMPORTED_MODULE_12__.ProductLevelSpecificationsComponent, _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_11__.ProductOptionsSpecificationsComponent, _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_10__.ProductIncludedOptionsComponent, _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_9__.ProductExtraOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_7__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 91792:
/*!************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-c5-bundle/product-c5-bundle.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductC5BundleComponent: () => (/* binding */ ProductC5BundleComponent)
/* harmony export */ });
/* harmony import */ var _constants_bundle_c5_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/bundle-c5.constant */ 81554);
/* harmony import */ var _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/product-icon.constant */ 73660);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component */ 22563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _product_c5_bundle_child_product_c5_bundle_child_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-c5-bundle-child/product-c5-bundle-child.component */ 90957);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);



















function ProductC5BundleComponent_ng_container_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "ng.product-overview.info.unable-to-manage"));
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.change-tariff-plan-connectivity"), " ");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "ng.product-overview.btn.change-tariff-plan-connectivity-old-oneup-bundle"), " ");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r18.handleRedirectToMarketingConfigurator($event, ctx_r18.planUpgradeUrl, "connectivity", plan_r1, "change plan link clicked"));
    })("click", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r19);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r21.redirectToMarketingConfigurator(ctx_r21.planUpgradeUrl, "connectivity", plan_r1, "change plan link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_div_1_Template, 3, 3, "div", 26)(2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_ng_template_2_Template, 2, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r13.isNewOneUpBundle())("ngIfElse", _r17);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.handleRedirectToMarketingConfigurator($event, ctx_r23.planUpgradeUrl, "entertainment", plan_r1, "change plan link clicked"));
    })("click", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.redirectToMarketingConfigurator(ctx_r26.planUpgradeUrl, "entertainment", plan_r1, "change plan link clicked"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.change-tariff-plan-entertainment"), " ");
  }
}
const _c0 = a0 => ({
  "mr-0": a0
});
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_1_Template, 4, 2, "a", 24)(2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_a_2_Template, 3, 3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c0, ctx_r7.showManageOptions(plan_r1) && section_r5.type === "includedOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", section_r5.type === "connectivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", section_r5.type === "entertainment");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r32.handleManageOptions($event, plan_r1));
    })("click", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r34);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r35.manageOptions(plan_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r39);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r37.handleManageOptions($event, plan_r1, true, true));
    })("click", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r39);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r40.manageOptions(plan_r1, true, true);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_1_Template, 3, 3, "a", 24)(2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_a_2_Template, 3, 3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", section_r5.type !== "entertainment" && ctx_r8.manageOptionUrl !== "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", section_r5.type === "entertainment" && ctx_r8.manageOptionUrl !== "/");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_10_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r44.handleManageOptions($event, plan_r1));
    })("click", function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_10_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46);
      const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5).$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      ctx_r47.manageOptions(plan_r1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_10_a_1_Template, 3, 3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r9.manageOptionUrl !== "/");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_11_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 32);
  }
}
const _c1 = a0 => ({
  product: a0
});
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-c5-bundle-child", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_11_div_1_div_2_Template, 1, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const product_r49 = ctx_r53.$implicit;
    const last_r50 = ctx_r53.last;
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("productOrOption", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](13, _c1, product_r49))("section", section_r5)("intentRequired", ctx_r51.intentRequired)("plan", plan_r1)("planUpgradeUrl", ctx_r51.planUpgradeUrl)("managePhone2GoUrl", ctx_r51.managePhone2GoUrl)("changeDataPlanUrl", ctx_r51.changeDataPlanUrl)("changeTariffPlanUrl", ctx_r51.changeTariffPlanUrl)("phoneToGoNumbers", ctx_r51.phoneToGoNumbers)("manageOptionUrl", ctx_r51.manageOptionUrl)("componentInstanceID", ctx_r51.componentInstanceID)("canManageProductHolding", ctx_r51.canManageProductHolding);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !last_r50);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_11_div_1_Template, 3, 15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r49 = ctx.$implicit;
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r10.isProductAllowed(section_r5, product_r49));
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_ng_container_2_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 32);
  }
}
const _c2 = a0 => ({
  option: a0
});
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-c5-bundle-child", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_ng_container_2_div_1_div_2_Template, 1, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const option_r58 = ctx_r62.$implicit;
    const last_r59 = ctx_r62.last;
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("productOrOption", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](13, _c2, option_r58))("section", section_r5)("intentRequired", ctx_r60.intentRequired)("plan", plan_r1)("planUpgradeUrl", ctx_r60.planUpgradeUrl)("managePhone2GoUrl", ctx_r60.managePhone2GoUrl)("phoneToGoNumbers", ctx_r60.phoneToGoNumbers)("changeDataPlanUrl", ctx_r60.changeDataPlanUrl)("changeTariffPlanUrl", ctx_r60.changeTariffPlanUrl)("manageOptionUrl", ctx_r60.manageOptionUrl)("componentInstanceID", ctx_r60.componentInstanceID)("canManageProductHolding", ctx_r60.canManageProductHolding);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !last_r59);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_ng_container_2_div_1_Template, 3, 15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const option_r58 = ctx.$implicit;
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3).$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r57.showPlanLevelOption(section_r5, option_r58));
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", plan_r1.options);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_ng_container_2_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", 32);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-c5-bundle-child", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_ng_container_2_div_1_div_2_Template, 1, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r69 = ctx.$implicit;
    const last_r70 = ctx.last;
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](4).$implicit;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("productOrOption", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](13, _c2, option_r69))("section", section_r5)("intentRequired", ctx_r68.intentRequired)("plan", plan_r1)("planUpgradeUrl", ctx_r68.planUpgradeUrl)("managePhone2GoUrl", ctx_r68.managePhone2GoUrl)("phoneToGoNumbers", ctx_r68.phoneToGoNumbers)("changeDataPlanUrl", ctx_r68.changeDataPlanUrl)("changeTariffPlanUrl", ctx_r68.changeTariffPlanUrl)("manageOptionUrl", ctx_r68.manageOptionUrl)("componentInstanceID", ctx_r68.componentInstanceID)("canManageProductHolding", ctx_r68.canManageProductHolding);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !last_r70);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_ng_container_2_div_1_Template, 3, 15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r67.streamingOptions);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_ng_container_2_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r12.showStreamingSection);
  }
}
const _c3 = a0 => ({
  "col-md-6 col-12": a0
});
function ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 17)(7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_8_Template, 3, 5, "div", 19)(9, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_9_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_10_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_11_Template, 2, 1, "div", 1)(12, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_12_Template, 3, 1, "div", 22)(13, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_div_13_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](11, _c3, ctx_r6.showManageOptions(plan_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "c5SectionTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 9, section_r5.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.showChangePlan(plan_r1) && ctx_r6.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.showManageOptions(plan_r1) && section_r5.type !== "includedOptions" && section_r5.type !== "streaming" && !ctx_r6.isSuspendedPlan && ctx_r6.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r6.showManageOptions(plan_r1) && section_r5.type !== "includedOptions" && ctx_r6.hasActiveOrSuspendedProducts(plan_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", plan_r1.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", plan_r1.options.length > 0 && section_r5.type !== "streaming");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", plan_r1.options.length > 0 && section_r5.type === "streaming");
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_div_8_div_1_Template, 14, 13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", section_r5.showSection);
  }
}
function ProductC5BundleComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductC5BundleComponent_ng_container_1_div_1_div_2_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ProductC5BundleComponent_ng_container_1_div_1_div_8_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const plan_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", plan_r1.isMultipleDTV);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", plan_r1.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.c5Sections);
  }
}
function ProductC5BundleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_div_1_Template, 9, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", plan_r1.isC5Bundle());
  }
}
class ProductC5BundleComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.AbstractBaseComponent {
  urlService;
  datalayerService;
  productOverviewService;
  dialog;
  c5Sections = _constants_bundle_c5_constant__WEBPACK_IMPORTED_MODULE_0__.BundleC5Contants.C5_SECTIONS;
  products;
  showStreamingSection = false;
  canManageProductHolding = false;
  hasSalesScope = false;
  planUpgradeUrl;
  changeDataPlanUrl;
  managePhone2GoUrl;
  intentRequired;
  manageOptionUrl;
  phoneToGoNumbers;
  componentInstanceID;
  streamingOptions;
  changeTariffPlanUrl;
  isSuspendedPlan = false;
  set setSelectedProducts(selectedProducts) {
    selectedProducts.forEach(product => this.updateC5Sections(product));
    this.products = selectedProducts;
    this.isSuspendedPlan = this.products.some(product => product.isProductSuspended());
  }
  constructor(urlService, datalayerService, productOverviewService, dialog) {
    super();
    this.urlService = urlService;
    this.datalayerService = datalayerService;
    this.productOverviewService = productOverviewService;
    this.dialog = dialog;
  }
  ngOnInit() {
    this.isNewOneUpBundle();
  }
  isNewOneUpBundle() {
    let isNewOneUpBundle = false;
    this.products?.some(product => {
      if (product.productInfo.chars) {
        isNewOneUpBundle = product.productInfo.chars.some(char => char.key.includes(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.NEW_ONEUP_BUNDLE_KEY) && char.values.includes('true'));
      }
    });
    return isNewOneUpBundle;
  }
  updateC5Sections(product) {
    this.c5Sections.forEach(section => {
      switch (section.type) {
        case 'connectivity':
          section.showSection = this.hasSpecifiedProductTypes(section, product) || this.hasPlanLevelOptions(section, product);
          break;
        case 'entertainment':
          section.showSection = this.hasSpecifiedProductTypes(section, product);
          break;
        case 'includedOptions':
          section.showSection = this.hasPlanLevelOptions(section, product);
          break;
        case 'streaming':
          section.showSection = this.showStreamingSection;
          break;
      }
    });
  }
  manageOptions(product, isBundle, isEntertainment) {
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${product.identifier}&flow=${_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (isBundle) {
      if (isEntertainment) {
        url += '&producttype=bundle&category=dtv';
      } else {
        url += product.productType ? '&producttype=bundle&category=' + product.productType : '&producttype=bundle';
      }
    } else if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  hasSpecifiedProductTypes(section, product) {
    return product.children.some(child => {
      return this.isProductAllowed(section, child);
    });
  }
  hasPlanLevelOptions(section, product) {
    return product.options.some(option => {
      return this.showPlanLevelOption(section, option);
    });
  }
  isProductAllowed(section, product) {
    return section.productTypes.includes(product.productType);
  }
  showPlanLevelOption(section, option) {
    return !option.isIncludedOption && section.showPlanLevelNonIncludedOptions || (option.isIncludedOption || false) && section.showPlanLevelIncludedOptions && (option.status === 'NOT_ACTIVE' || this.isSecurityOption(option) || _constants_bundle_c5_constant__WEBPACK_IMPORTED_MODULE_0__.BundleC5Contants.SHOW_ALWAYS_OPTIONS.includes(option.productInfo.externalProductCode || ''));
  }
  isSecurityOption(option) {
    return option.productInfo?.subCategory?.name === _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_1__.ProductIconConstants.SUBCATEGORY_SECURITY;
  }
  showManageOptions(product) {
    let isPrepaid = false;
    if (product.productInfo.categories?.length) {
      isPrepaid = product.productInfo.categories.some(item => {
        return item.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }
    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  showChangePlan(product) {
    return this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  hasActiveOrSuspendedProducts(plan) {
    return plan.children && plan.children.length && plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVE_STATUS) || plan.children.some(val => val.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.SUSPENDED_STATUS);
  }
  redirectToMarketingConfigurator(url, intent, plan, eventName) {
    this.handleMarketingConfiguratorAnalytics(eventName);
    if (plan.hasOldSocialTariffDiscount) {
      this.changePlanForSocialTariff(url, intent, plan);
    } else {
      !this.intentRequired || !this.isNewOneUpBundle() ? this.urlService.redirectTo(url + '?installationLocationId=' + plan.locationId) : this.urlService.redirectTo(url + '?intent=' + intent + '&installationLocationId=' + plan.locationId);
    }
  }
  handleMarketingConfiguratorAnalytics(eventName) {
    const eventInfoData = this.datalayerService.createEventInfo(eventName, _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.EventTypeEnum.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
  }
  changePlanForSocialTariff(url, intent, plan) {
    this.dialog.open(_grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_6__.GrandFatheringSocialTariffNotificationComponent).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(result => {
      if (result) {
        this.urlService.redirectTo(this.composeMarketingConfiguratorUrl(url, intent, plan));
      }
    });
  }
  composeMarketingConfiguratorUrl(url, intent, plan) {
    return !this.intentRequired || !this.isNewOneUpBundle() ? url + '?installationLocationId=' + plan.locationId : url + '?intent=' + intent + '&installationLocationId=' + plan.locationId;
  }
  handleRedirectToMarketingConfigurator(event, url, intent, plan, eventName) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_9__.EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingConfigurator(url, intent, plan, eventName);
    }
  }
  handleManageOptions(event, product, isBundle, isEntertainment) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_9__.EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(product, isBundle, isEntertainment);
    }
  }
  static ɵfac = function ProductC5BundleComponent_Factory(t) {
    return new (t || ProductC5BundleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_5__.ProductOverviewService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ProductC5BundleComponent,
    selectors: [["tg-product-c5-bundle"]],
    inputs: {
      showStreamingSection: "showStreamingSection",
      canManageProductHolding: "canManageProductHolding",
      hasSalesScope: "hasSalesScope",
      planUpgradeUrl: "planUpgradeUrl",
      changeDataPlanUrl: "changeDataPlanUrl",
      managePhone2GoUrl: "managePhone2GoUrl",
      intentRequired: "intentRequired",
      manageOptionUrl: "manageOptionUrl",
      phoneToGoNumbers: "phoneToGoNumbers",
      componentInstanceID: "componentInstanceID",
      streamingOptions: "streamingOptions",
      changeTariffPlanUrl: "changeTariffPlanUrl",
      setSelectedProducts: "setSelectedProducts"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "product-overview"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12", "col-sm-12", "m--auto"], ["class", "notification notification--info mb-20", 4, "ngIf"], [1, "pb--l", "pl--m", "pl--n--md"], [1, "align-items--center", "display--flex", "text-weight--l"], [1, "icon-apn", "icon-no-size-override", "icon-md"], [1, "text--l", "ml--m--md", "ml--xs", "text-capitalize"], [1, "notification", "notification--info", "mb-20"], [1, "icon", "icon-information-shape", "info"], ["class", "content-section mb-30", 4, "ngIf"], [1, "content-section", "mb-30"], [1, "content-section__header", "row"], [3, "ngClass"], [1, "text-font-family--t7", "text--l"], [1, "col-md-6", "col-12"], [1, "display--flex", "align-items--center", "justify-content--end--md"], ["class", "text-align--right--md mr--xxxl--md", 3, "ngClass", 4, "ngIf"], ["class", "text-align--right pt--n--md pt--m hide-until-md", 4, "ngIf"], ["class", "col-md-12 col-xs-12 pt--n--md pt--m hide-from-md", 4, "ngIf"], [4, "ngIf"], [1, "text-align--right--md", "mr--xxxl--md", 3, "ngClass"], ["tabindex", "0", "class", "font--body-regular link link--subtle", 3, "keydown", "click", 4, "ngIf"], ["tabindex", "0", 1, "font--body-regular", "link", "link--subtle", 3, "keydown", "click"], [4, "ngIf", "ngIfElse"], ["oldOneUpBundleLabel", ""], [1, "text-align--right", "pt--n--md", "pt--m", "hide-until-md"], [1, "col-md-12", "col-xs-12", "pt--n--md", "pt--m", "hide-from-md"], [3, "productOrOption", "section", "intentRequired", "plan", "planUpgradeUrl", "managePhone2GoUrl", "changeDataPlanUrl", "changeTariffPlanUrl", "phoneToGoNumbers", "manageOptionUrl", "componentInstanceID", "canManageProductHolding"], ["class", "divider divider--s__very-light-grey", 4, "ngIf"], [1, "divider", "divider--s__very-light-grey"], [3, "productOrOption", "section", "intentRequired", "plan", "planUpgradeUrl", "managePhone2GoUrl", "phoneToGoNumbers", "changeDataPlanUrl", "changeTariffPlanUrl", "manageOptionUrl", "componentInstanceID", "canManageProductHolding"]],
    template: function ProductC5BundleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductC5BundleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _product_c5_bundle_child_product_c5_bundle_child_component__WEBPACK_IMPORTED_MODULE_11__.ProductC5BundleChildComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 10415:
/*!************************************************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-c5-bundle/product-c5-mobile-specifications/product-c5-mobile-specifications.component.ts ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductC5MobileSpecificationsComponent: () => (/* binding */ ProductC5MobileSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/product.model */ 72929);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/product-overview.constant */ 66191);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function ProductC5MobileSpecificationsComponent_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", line_r6, " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", specification_r7.localizedContent == null ? null : specification_r7.localizedContent.name, " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.getLocalizedLabel(specification_r7.value), " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](specification_r7.minValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, "ng.product-overview.text.to"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](specification_r7.maxValue);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.getLocalizedLabel(specification_r7.unit), " ");
  }
}
const _c0 = a0 => ({
  "pt-0": a0
});
function ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_span_3_Template, 3, 1, "span", 15)(4, ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_span_4_Template, 8, 5, "span", 15)(5, ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, specification_r7.isMonetary));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !specification_r7.isMonetary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", specification_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", specification_r7.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", specification_r7.showUnit);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_7_div_1_Template, 6, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !specification_r7.labelKey.endsWith("mobile-data-allowance-limited1"));
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_div_8_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r27.getFormattedSpecifications(spec_r26.localizedContent == null ? null : spec_r26.localizedContent.name), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_div_8_ng_container_1_ul_1_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const spec_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", spec_r26.localizedContent == null ? null : spec_r26.localizedContent.name);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_div_8_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const service_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", service_r24.specifications);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_div_8_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "ng.product-overview.lbl.included-option"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", option_r20.productInfo.services);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optionSpec_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r31.getLocalizedLabel(optionSpec_r30.value), " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 24)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_2_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const optionSpec_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", optionSpec_r30.localizedContent == null ? null : optionSpec_r30.localizedContent.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", optionSpec_r30.value);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_1_Template, 9, 5, "div", 18)(2, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_div_2_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", option_r20.isIncludedOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r19.getLineSpecification(option_r20));
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r18.product.options);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_div_8_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.product.options);
  }
}
function ProductC5MobileSpecificationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductC5MobileSpecificationsComponent_div_1_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductC5MobileSpecificationsComponent_div_1_div_7_Template, 2, 1, "div", 8)(8, ProductC5MobileSpecificationsComponent_div_1_div_8_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "ng.product-overview.lbl.unlimited-numbers"), " (", ctx_r0.product.unlimitedLines.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.product.unlimitedLines);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.getLineSpecification());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.product.hasIncludedOptions);
  }
}
function ProductC5MobileSpecificationsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 25);
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", line_r35, " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", specification_r36.localizedContent == null ? null : specification_r36.localizedContent.name, " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r39.getLocalizedLabel(specification_r36.value), " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](specification_r36.minValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, "ng.product-overview.text.to"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](specification_r36.maxValue);
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r41.getLocalizedLabel(specification_r36.unit), " ");
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_span_3_Template, 3, 1, "span", 15)(4, ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_span_4_Template, 8, 5, "span", 15)(5, ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const specification_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, specification_r36.isMonetary));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !specification_r36.isMonetary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", specification_r36.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", specification_r36.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", specification_r36.showUnit);
  }
}
function ProductC5MobileSpecificationsComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_3_div_7_div_1_Template, 6, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const specification_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !specification_r36.labelKey.endsWith("mobile-data-allowance-unlimited"));
  }
}
function ProductC5MobileSpecificationsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductC5MobileSpecificationsComponent_div_3_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductC5MobileSpecificationsComponent_div_3_div_7_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.product-overview.lbl.limited-numbers"), " (", ctx_r2.product.limitedLines.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.product.limitedLines);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.getLineSpecification());
  }
}
class ProductC5MobileSpecificationsComponent {
  translateService;
  set c5product(product) {
    this.product = product;
    this.specifications = this.product.productInfo.getSortedSpecifications();
  }
  plan;
  specifications;
  product;
  DATA_ONLY_MOBILE_LINE = 'data-only-mobile-line';
  constructor(translateService) {
    this.translateService = translateService;
  }
  getLineSpecification(option) {
    const bundleSpecs = this.getBundleSpecifications(option);
    if (this.product.productInfo.productType === this.DATA_ONLY_MOBILE_LINE && bundleSpecs) {
      return this.removeLimitedIfBothLimitedAndUnlimitedExist(bundleSpecs);
    }
    return bundleSpecs;
  }
  getBundleSpecifications(option) {
    return this.specifications?.filter(spec => {
      switch (option ? option.productType : this.product.productType) {
        case 'internet':
          return spec.serviceType?.toLowerCase() === 'fixed_internet';
        case 'mobile':
          return this.filterMobileSpecs(spec, option);
        case 'dtv':
          return spec.serviceType?.toLowerCase() === 'dtv';
        case 'telephone':
          return spec.serviceType?.toLowerCase() === 'fixed_calling';
        case 'streaming':
          return spec.serviceType?.toLowerCase() === 'streaming';
        default:
          return false;
      }
    });
  }
  filterMobileSpecs(spec, option) {
    if (this.product.productInfo.productType === this.DATA_ONLY_MOBILE_LINE || option?.productInfo.productType === this.DATA_ONLY_MOBILE_LINE) {
      return spec.serviceType?.toLowerCase() === 'mobile_internet';
    }
    return spec.serviceType?.toLowerCase() === 'mobile_internet' || spec.serviceType?.toLowerCase() === 'mobile_calling';
  }
  // STILLTOCHECK this function --> still viable??
  removeLimitedIfBothLimitedAndUnlimitedExist(specs) {
    const limitedIndex = specs.findIndex(spec => spec.labelKey.includes('mobile-data-allowance-limited'));
    const unlimitedIndex = specs.findIndex(spec => spec.labelKey.endsWith('mobile-data-allowance-unlimited'));
    if (limitedIndex !== -1 && unlimitedIndex !== -1) {
      specs?.splice(limitedIndex, 1);
    }
    return specs;
  }
  getLocalizedLabel(value) {
    if (!value) {
      return value;
    }
    const valueUpperCased = value.toUpperCase();
    if (valueUpperCased === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.UNLIMITED) {
      return this.translateService.instant('ng.product-overview.lbl.unlimited');
    } else if (valueUpperCased === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.SMS_UNIT) {
      return this.translateService.instant('ng.product-overview.lbl.sms-unit');
    }
    return value;
  }
  getFormattedSpecifications(specification) {
    if (specification) {
      return specification.replace(/\n/g, '<li>');
    }
    return '';
  }
  static ɵfac = function ProductC5MobileSpecificationsComponent_Factory(t) {
    return new (t || ProductC5MobileSpecificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductC5MobileSpecificationsComponent,
    selectors: [["tg-product-c5-mobile-specifications"]],
    inputs: {
      c5product: "c5product",
      plan: "plan"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "row", "display--flex--md", "justify-content--between", "pl--xs"], ["class", "col-md-12 pr--xs", 4, "ngIf"], ["class", "divider divider--xxxs__grey mt--xl", 4, "ngIf"], [1, "col-md-12", "pr--xs"], [1, "pt--l"], [1, "text-font-family--t7"], [1, "row", "display--flex--md"], ["class", "m--xxs background-white center-align text--s text-font-family--t7 p--xs", "style", "width: fit-content", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "mt--m", 4, "ngIf"], [1, "m--xxs", "background-white", "center-align", "text--s", "text-font-family--t7", "p--xs", 2, "width", "fit-content"], ["class", "row border--b--r border-width--b--r border-style--b--solid border-color--all--light-grey display--flex--md justify-content--between pt--l", 3, "ngClass", 4, "ngIf"], [1, "row", "border--b--r", "border-width--b--r", "border-style--b--solid", "border-color--all--light-grey", "display--flex--md", "justify-content--between", "pt--l", 3, "ngClass"], ["class", "col-md-9", 4, "ngIf"], [1, "col-md-3", "text-align--right--md", "text-weight--l", "mt--n--md", "mt--xxs"], [4, "ngIf"], [1, "col-md-9"], [1, "mt--m"], ["class", "pt--xs", 4, "ngIf"], [1, "pt--xs"], [1, "text--s"], ["class", "mt-10 ml--m", 4, "ngIf"], [1, "mt-10", "ml--m"], [1, "data--key", 3, "innerHtml"], [1, "row", "display--flex--md", "justify-content--between", "pt--l"], [1, "divider", "divider--xxxs__grey", "mt--xl"]],
    template: function ProductC5MobileSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductC5MobileSpecificationsComponent_div_1_Template, 9, 7, "div", 1)(2, ProductC5MobileSpecificationsComponent_div_2_Template, 1, 0, "div", 2)(3, ProductC5MobileSpecificationsComponent_div_3_Template, 8, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.unlimitedLines == null ? null : ctx.product.unlimitedLines.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.product.limitedLines == null ? null : ctx.product.limitedLines.length) && (ctx.product.unlimitedLines == null ? null : ctx.product.unlimitedLines.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.limitedLines == null ? null : ctx.product.limitedLines.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 11617:
/*!********************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-extra-options/product-extra-options.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductExtraOptionsComponent: () => (/* binding */ ProductExtraOptionsComponent)
/* harmony export */ });
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product.model */ 72929);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-options-specifications/product-options-specifications.component */ 73766);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function ProductExtraOptionsComponent_div_4_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 8);
  }
}
function ProductExtraOptionsComponent_div_4_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r1.activeOptions + " ");
  }
}
const _c0 = (a0, a1) => ({
  "pt--xs": a0,
  "pt--xxxs": a1
});
function ProductExtraOptionsComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductExtraOptionsComponent_div_4_div_1_i_2_Template, 1, 0, "i", 5)(3, ProductExtraOptionsComponent_div_4_div_1_span_3_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "tg-product-options-specifications", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c0, ctx_r2.isTelenetBrand, !ctx_r2.isTelenetBrand));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isTelenetBrand);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", option_r1.activeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "extraOptionLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isTelenetBrand", ctx_r2.isTelenetBrand)("services", option_r1 == null ? null : option_r1.productInfo == null ? null : option_r1.productInfo.services);
  }
}
function ProductExtraOptionsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductExtraOptionsComponent_div_4_div_1_Template, 7, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !option_r1.isIncludedOption);
  }
}
class ProductExtraOptionsComponent {
  product;
  isTelenetBrand = true;
  options = [];
  ngOnInit() {
    this.options = [...this.product.options].sort((a, b) => {
      return (a.productInfo?.weight || 0) - (b.productInfo?.weight || 0);
    });
  }
  static ɵfac = function ProductExtraOptionsComponent_Factory(t) {
    return new (t || ProductExtraOptionsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductExtraOptionsComponent,
    selectors: [["tg-product-extra-options"]],
    inputs: {
      product: "product",
      isTelenetBrand: "isTelenetBrand"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "mt--m"], [1, "text-font-family--t7"], [4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "icon icon-check mr--xxs icon-md", 4, "ngIf"], [4, "ngIf"], [3, "isTelenetBrand", "services"], [1, "icon", "icon-check", "mr--xxs", "icon-md"]],
    template: function ProductExtraOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductExtraOptionsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "ng.product-overview.lbl.extra-options-added"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.options);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__.ProductOptionsSpecificationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 77115:
/*!******************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-freephone-business/product-freephone-business.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFreePhoneBusinessComponent: () => (/* binding */ ProductFreePhoneBusinessComponent)
/* harmony export */ });
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-specifications/product-specifications.component */ 3715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);







function ProductFreePhoneBusinessComponent_div_12_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" + ", product_r1.handsets[0].handsetName, " ");
  }
}
function ProductFreePhoneBusinessComponent_div_12_i_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 24);
  }
}
function ProductFreePhoneBusinessComponent_div_12_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 25);
  }
}
function ProductFreePhoneBusinessComponent_div_12_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](child_r9.identifier);
  }
}
function ProductFreePhoneBusinessComponent_div_12_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductFreePhoneBusinessComponent_div_12_div_21_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", product_r1.children);
  }
}
function ProductFreePhoneBusinessComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 14)(7, "div")(8, "div", 15)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ProductFreePhoneBusinessComponent_div_12_span_11_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductFreePhoneBusinessComponent_div_12_Template_div_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const idx_r2 = restoredCtx.index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.visibilityIndices[idx_r2] = !ctx_r11.visibilityIndices[idx_r2]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function ProductFreePhoneBusinessComponent_div_12_Template_a_keydown_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const idx_r2 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.onKeydown($event, idx_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ProductFreePhoneBusinessComponent_div_12_i_19_Template, 1, 0, "i", 20)(20, ProductFreePhoneBusinessComponent_div_12_i_20_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProductFreePhoneBusinessComponent_div_12_div_21_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "tg-product-specifications", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", "icon-" + ctx_r0.getProductIcon(product_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "fpbLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r1.productInfo.labelKey, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r1.handsets && product_r1.handsets.length > 0 && product_r1.handsets[0].handsetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 12, "ng.product-overview.lbl.view-numbers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", ctx_r0.visibilityIndices[idx_r2] ? "true" : "false")("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 14, "ng.product-overview.lbl.view-numbers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.visibilityIndices[idx_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.visibilityIndices[idx_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.visibilityIndices[idx_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("products", ctx_r0.fpbProducts)("product", product_r1);
  }
}
class ProductFreePhoneBusinessComponent {
  productOverviewService;
  fpbProducts;
  freePhoneBusinessUrl = '';
  visibilityIndices = [];
  constructor(productOverviewService) {
    this.productOverviewService = productOverviewService;
  }
  getProductIcon(product) {
    return this.productOverviewService.getProductIcon(product);
  }
  onKeydown(event, index) {
    if (event.key === 'Enter') {
      this.visibilityIndices[index] = !this.visibilityIndices[index];
    }
  }
  static ɵfac = function ProductFreePhoneBusinessComponent_Factory(t) {
    return new (t || ProductFreePhoneBusinessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductFreePhoneBusinessComponent,
    selectors: [["tg-product-freephone-business"]],
    inputs: {
      fpbProducts: "fpbProducts",
      freePhoneBusinessUrl: "freePhoneBusinessUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 8,
    consts: [[1, "product-overview"], [1, "pb--l", "pl--m", "pl--n--md", "display--flex", "align-items--center", "justify-content--between"], [1, "align-items--center", "display--flex", "text-weight--l"], [1, "text--l", "ml--m--md", "ml--xs", "text-capitalize"], [1, "text-align--right", "hide-until-md"], [1, "text-align--right", "hide-until-md", "ml--xxxl--md"], [1, "font--body-regular", "product-overview__hide-base", 3, "href"], ["class", "content-section mb-30", 4, "ngFor", "ngForOf"], [1, "content-section", "mb-30"], [1, "content-section__details"], [1, "row", "display--flex", "align-items--start", "width--full"], [1, "col-12", "display--flex", "align-items--start"], [1, "product-overview__content-section__image", "display--flex", "align-items--center", "justify-content--center"], [1, "icon", "icon-md", "text-weight--xxs", 3, "ngClass"], [1, "product-overview__heading", "display--flex--md", "flex-direction--column", "ml--m"], [1, "text-font-family--t7", "text--xxm"], [4, "ngIf"], [1, "link", "text--s", 3, "click"], [1, "text--s"], ["tabindex", "0", "aria-controls", "product_freephone_bus_product_info", 3, "keydown"], ["class", "icon icon-sm icon-chevron-down product-overview__icon-section", 4, "ngIf"], ["class", "icon icon-sm icon-chevron-up product-overview__icon-section", 4, "ngIf"], ["class", "text--s mt--m color-shade_48", "id", "product_freephone_bus_product_info", 4, "ngIf"], [3, "products", "product"], [1, "icon", "icon-sm", "icon-chevron-down", "product-overview__icon-section"], [1, "icon", "icon-sm", "icon-chevron-up", "product-overview__icon-section"], ["id", "product_freephone_bus_product_info", 1, "text--s", "mt--m", "color-shade_48"], ["class", "mr--xxxs", 4, "ngFor", "ngForOf"], [1, "mr--xxxs"]],
    template: function ProductFreePhoneBusinessComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProductFreePhoneBusinessComponent_div_12_Template, 23, 16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "ng.product-overview.free-phone-business"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx.freePhoneBusinessUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 6, "ng.product-overview.lnk.manage-product"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.fpbProducts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_2__.ProductSpecificationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 22591:
/*!**************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-included-options/product-included-options.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductIncludedOptionsComponent: () => (/* binding */ ProductIncludedOptionsComponent)
/* harmony export */ });
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product.model */ 72929);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-options-specifications/product-options-specifications.component */ 73766);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function ProductIncludedOptionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 4);
  }
}
function ProductIncludedOptionsComponent_div_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tg-product-options-specifications", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "includedOptionLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r4.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isTelenetBrand", ctx_r5.isTelenetBrand)("services", option_r4 == null ? null : option_r4.productInfo == null ? null : option_r4.productInfo.services);
  }
}
function ProductIncludedOptionsComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_5_div_1_div_1_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", option_r4.isIncludedOption);
  }
}
function ProductIncludedOptionsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_5_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.product.options);
  }
}
function ProductIncludedOptionsComponent_div_6_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tg-product-options-specifications", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pack_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pack_r8.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isTelenetBrand", ctx_r9.isTelenetBrand)("services", pack_r8 == null ? null : pack_r8.productInfo == null ? null : pack_r8.productInfo.services);
  }
}
function ProductIncludedOptionsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_6_div_1_div_1_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pack_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pack_r8.isIncludedOption);
  }
}
function ProductIncludedOptionsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_6_div_1_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.product.contentPacks);
  }
}
class ProductIncludedOptionsComponent {
  product;
  isTelenetBrand = true;
  static ɵfac = function ProductIncludedOptionsComponent_Factory(t) {
    return new (t || ProductIncludedOptionsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductIncludedOptionsComponent,
    selectors: [["tg-product-included-options"]],
    inputs: {
      product: "product",
      isTelenetBrand: "isTelenetBrand"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 6,
    consts: [[1, "mt--m"], ["class", "divider divider--xxxs__grey mb--s", 4, "ngIf"], [1, "text-font-family--t7"], [4, "ngIf"], [1, "divider", "divider--xxxs__grey", "mb--s"], [4, "ngFor", "ngForOf"], ["class", "pt--xs", 4, "ngIf"], [1, "pt--xs"], [3, "isTelenetBrand", "services"]],
    template: function ProductIncludedOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductIncludedOptionsComponent_div_5_Template, 2, 1, "div", 3)(6, ProductIncludedOptionsComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isTelenetBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ng.product-overview.lbl.included-options"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.contentPacks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__.ProductOptionsSpecificationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 37762:
/*!**********************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-level-specifications/product-level-specifications.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductLevelSpecificationsComponent: () => (/* binding */ ProductLevelSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product.model */ 72929);
/* harmony import */ var _store_product_overview_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/product-overview.facade */ 70452);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);









const _c0 = (a0, a1) => ({
  "col-md-4 col-8": a0,
  "col-12": a1
});
function ProductLevelSpecificationsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](3, _c0, spec_r1.isValue || spec_r1.isRange, !spec_r1.isValue && !spec_r1.isRange));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-cy", "specificationName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", spec_r1.localizedContent == null ? null : spec_r1.localizedContent.name, " ");
  }
}
function ProductLevelSpecificationsComponent_div_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-cy", "specificationValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.getLocalizedLabel(spec_r1.value));
  }
}
function ProductLevelSpecificationsComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](spec_r1.minValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ng.product-overview.text.to"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](spec_r1.maxValue);
  }
}
function ProductLevelSpecificationsComponent_div_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-cy", "specificationValueUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.getLocalizedLabel(spec_r1.unit), "");
  }
}
const _c1 = a0 => ({
  "pt-0": a0
});
function ProductLevelSpecificationsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductLevelSpecificationsComponent_div_0_div_1_Template, 2, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductLevelSpecificationsComponent_div_0_span_3_Template, 3, 2, "span", 4)(4, ProductLevelSpecificationsComponent_div_0_span_4_Template, 8, 5, "span", 4)(5, ProductLevelSpecificationsComponent_div_0_span_5_Template, 2, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, spec_r1.isMonetary));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !spec_r1.isMonetary);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", spec_r1.isValue && spec_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", spec_r1.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", spec_r1.showUnit);
  }
}
class ProductLevelSpecificationsComponent {
  translateService;
  productOverviewFacade;
  product;
  isBundle;
  specifications;
  DATA_ONLY_MOBILE_LINE = 'DATA ONLY MOBILE LINE';
  constructor(translateService, productOverviewFacade) {
    this.translateService = translateService;
    this.productOverviewFacade = productOverviewFacade;
  }
  ngOnInit() {
    const filteredSpecifications = this.product.productInfo.getSortedSpecifications();
    this.specifications = filteredSpecifications;
    if (this.isBundle) {
      this.specifications = filteredSpecifications.filter(spec => spec.productType?.toUpperCase() === this.product.productType?.toUpperCase());
      if (this.isDataOnlyMobileLine()) {
        this.specifications = this.removeLimitedIfBothLimitedAndUnlimitedExist(this.specifications);
      }
    }
    // For some reason, OMAPI/back-end is not sending specifications for some
    // options. You're supposed to get these from the root product.
    // The idea is to check if there are specs or not. If not, search for
    // them on the correct root product and child, and get them from there.
    if (!this.specifications || !this.specifications.length) {
      this.retrieveAndSetSpecifications();
      if (this.isBundle && this.isDataOnlyMobileLine()) {
        this.specifications = this.removeLimitedIfBothLimitedAndUnlimitedExist(this.specifications);
      }
    }
  }
  getLocalizedLabel(value) {
    if (!value) {
      return value;
    }
    const valueUpperCased = value.toUpperCase();
    if (valueUpperCased === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.UNLIMITED) {
      return this.translateService.instant('ng.product-overview.lbl.unlimited');
    } else if (valueUpperCased === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.SMS_UNIT) {
      return this.translateService.instant('ng.product-overview.lbl.sms-unit');
    }
    return value;
  }
  retrieveAndSetSpecifications() {
    this.productOverviewFacade.selectedAccountProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(products => {
      const rootProduct = products.find(product => product.productType === 'bundle' && product.children.length) || products[0];
      const specifications = this.getSpecificationsForProductType(rootProduct, this.product.productType);
      this.specifications = specifications;
    });
  }
  getSpecificationsForProductType(product, productType) {
    if (!product || !product.productInfo.services) return [];
    const services = product.productInfo.services.filter(spec => {
      switch (productType) {
        case 'internet':
          return spec.serviceType?.toLowerCase() === 'fixed_internet';
        case 'mobile':
          {
            const isDataOnlyMobileLine = /data[\s-]only[\s-]mobile[\s-]line/i.test(this.product.productInfo.productType || '');
            return this.filterMobileSpecs(spec, isDataOnlyMobileLine);
          }
        case 'dtv':
          return spec.serviceType?.toLowerCase() === 'dtv';
        case 'telephone':
          return spec.serviceType?.toLowerCase() === 'fixed_calling';
        case 'streaming':
          return spec.serviceType?.toLowerCase() === 'streaming';
        default:
          return false;
      }
    });
    return services.map(service => service.specifications || []).flat();
  }
  filterMobileSpecs(spec, isDataOnlyMobileLine) {
    if (isDataOnlyMobileLine) {
      return spec.serviceType?.toLowerCase() === 'mobile_internet';
    } else {
      return spec.serviceType?.toLowerCase() === 'mobile_internet' || spec.serviceType?.toLowerCase() === 'mobile_calling';
    }
  }
  isDataOnlyMobileLine() {
    return this.product.productInfo?.productType === this.DATA_ONLY_MOBILE_LINE;
  }
  removeLimitedIfBothLimitedAndUnlimitedExist(specs) {
    const limitedIndex = this.getLimitedSpecIndex(specs);
    const unlimitedIndex = this.getUnlimitedSpecIndex(specs);
    if (limitedIndex !== -1 && unlimitedIndex !== -1) {
      specs.splice(limitedIndex, 1);
    }
    return specs;
  }
  getLimitedSpecIndex(specs) {
    return specs.findIndex(spec => spec.labelKey.includes('mobile-data-allowance-limited'));
  }
  getUnlimitedSpecIndex(specs) {
    return specs.findIndex(spec => spec.labelKey.endsWith('mobile-data-allowance-unlimited'));
  }
  static ɵfac = function ProductLevelSpecificationsComponent_Factory(t) {
    return new (t || ProductLevelSpecificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_store_product_overview_facade__WEBPACK_IMPORTED_MODULE_4__.ProductOverviewFacade));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProductLevelSpecificationsComponent,
    selectors: [["tg-product-level-specifications"]],
    inputs: {
      product: "product",
      isBundle: "isBundle"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "row display--flex--md pt--m", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "display--flex--md", "pt--m", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [1, "col-md-2", "col-4", "text-align--right", "text-align--left--md", "text-weight--l", "mt--n--md"], [4, "ngIf"], [3, "ngClass"]],
    template: function ProductLevelSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ProductLevelSpecificationsComponent_div_0_Template, 6, 7, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.specifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7103:
/*!******************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-modem-banner/product-modem-banner.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModemBannerComponent: () => (/* binding */ ProductModemBannerComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);











function ProductModemBannerComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductModemBannerComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.redirectToSalesFlow("marketing", ctx_r1.locationId, "modem-swap", "email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-cy", "modemUpgradeButton");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "ng.product-overview.btn.modem-upgrade"), " ");
  }
}
class ProductModemBannerComponent {
  urlService;
  dataLayerService;
  productOverviewService;
  locationId;
  changeTariffPlanUrl;
  componentInstanceID;
  constructor(urlService, dataLayerService, productOverviewService) {
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
  }
  redirectToSalesFlow(flow, locationId, action, source) {
    const eventInfoData = this.dataLayerService.createEventInfo(_constants_events_constant__WEBPACK_IMPORTED_MODULE_2__.EventsConstants.EVENT_NAME_MODEM_UPGRADE_BANNER, _constants_events_constant__WEBPACK_IMPORTED_MODULE_2__.EventsConstants.EVENT_TYPE_CLICK);
    this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=${flow}&installationLocationId=${locationId}&action=${action}&source=${source}`);
  }
  static ɵfac = function ProductModemBannerComponent_Factory(t) {
    return new (t || ProductModemBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProductModemBannerComponent,
    selectors: [["tg-product-modem-banner"]],
    inputs: {
      locationId: "locationId",
      changeTariffPlanUrl: "changeTariffPlanUrl",
      componentInstanceID: "componentInstanceID"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "content-section", "mb-30", "p--xl--md", "p--l"], [1, "row"], [1, "col-md-8"], [1, "text--xm", "text-weight--g"], [1, "text--xm"], [1, "col-md-4", "pt--n--md", "pt--m", "text-align--right--md"], ["class", "button button--primary", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "button", "button--primary", 3, "click"]],
    template: function ProductModemBannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProductModemBannerComponent_button_10_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ng.product-overview.lbl.modem-upgrade-banner-title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 5, "ng.product-overview.lbl.modem-upgrade-banner-description"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.changeTariffPlanUrl !== "/");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 66302:
/*!********************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-notifications/product-notifications.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductNotificationsComponent: () => (/* binding */ ProductNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function ProductNotificationsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "span", 2)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "yupNotification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.product-overview.lbl.yup-product-active"), " ");
  }
}
function ProductNotificationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "span", 2)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "suspendedPlanNotification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.product-overview.lbl.suspended-plan"), " ");
  }
}
function ProductNotificationsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "span", 2)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "moveNotification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.product-overview.lbl.product-is-under-move"), " ");
  }
}
class ProductNotificationsComponent {
  showYUPNotificationMessage;
  showSuspendedPlanNotificationMessage;
  showMoveNotificationMessage;
  static ɵfac = function ProductNotificationsComponent_Factory(t) {
    return new (t || ProductNotificationsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProductNotificationsComponent,
    selectors: [["tg-product-notifications"]],
    inputs: {
      showYUPNotificationMessage: "showYUPNotificationMessage",
      showSuspendedPlanNotificationMessage: "showSuspendedPlanNotificationMessage",
      showMoveNotificationMessage: "showMoveNotificationMessage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [["class", "notification notification--info col-md-12 col-sm-12 m--auto mt--l", 4, "ngIf"], [1, "notification", "notification--info", "col-md-12", "col-sm-12", "m--auto", "mt--l"], [1, "icon", "icon-information-shape", "info"]],
    template: function ProductNotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductNotificationsComponent_div_0_Template, 5, 4, "div", 0)(1, ProductNotificationsComponent_div_1_Template, 5, 4, "div", 0)(2, ProductNotificationsComponent_div_2_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showYUPNotificationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSuspendedPlanNotificationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMoveNotificationMessage);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 73766:
/*!**************************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-options-specifications/product-options-specifications.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOptionsSpecificationsComponent: () => (/* binding */ ProductOptionsSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


const _c0 = (a0, a1) => ({
  "mt-10 ml--m": a0,
  "ml--xxxl": a1
});
function ProductOptionsSpecificationsComponent_div_0_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r4.isTelenetBrand, !ctx_r4.isTelenetBrand));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.getFormattedSpecifications(spec_r3.localizedContent == null ? null : spec_r3.localizedContent.name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "optionSpecifications");
  }
}
function ProductOptionsSpecificationsComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductOptionsSpecificationsComponent_div_0_ng_container_1_ul_1_Template, 2, 6, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const spec_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", spec_r3.localizedContent == null ? null : spec_r3.localizedContent.name);
  }
}
function ProductOptionsSpecificationsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductOptionsSpecificationsComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", service_r1.specifications);
  }
}
class ProductOptionsSpecificationsComponent {
  services;
  isTelenetBrand = true;
  getFormattedSpecifications(specification) {
    // Specification is in the form:
    // -abc\n-def\n-ghi
    if (specification) {
      return specification.replace(/^-/g, '').replace(/\n-/g, '<li>');
    }
    return '';
  }
  static ɵfac = function ProductOptionsSpecificationsComponent_Factory(t) {
    return new (t || ProductOptionsSpecificationsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductOptionsSpecificationsComponent,
    selectors: [["tg-product-options-specifications"]],
    inputs: {
      services: "services",
      isTelenetBrand: "isTelenetBrand"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "data--key", 3, "innerHTML"]],
    template: function ProductOptionsSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductOptionsSpecificationsComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.services);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    encapsulation: 2
  });
}

/***/ }),

/***/ 52144:
/*!************************************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-overview-monthly-plan/product-overview-monthly-plan.component.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewMonthlyPlanComponent: () => (/* binding */ ProductOverviewMonthlyPlanComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




function ProductOverviewMonthlyPlanComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, "ng.product-overview.lbl.new-subscription"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, "ng.product-overview.txt.view-options"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.addSubscriptionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "ng.product-overview.btn.add-subscription"), " ");
  }
}
function ProductOverviewMonthlyPlanComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 4, "ng.product-overview.lbl.discover-plan"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, "ng.product-overview.text.discover-plan"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r1.discoverSmartPhoneUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "ng.product-overview.btn.discover-plan"), " ");
  }
}
class ProductOverviewMonthlyPlanComponent {
  addSubscriptionUrl;
  discoverSmartPhoneUrl;
  static ɵfac = function ProductOverviewMonthlyPlanComponent_Factory(t) {
    return new (t || ProductOverviewMonthlyPlanComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProductOverviewMonthlyPlanComponent,
    selectors: [["tg-product-overview-monthly-plan"]],
    inputs: {
      addSubscriptionUrl: "addSubscriptionUrl",
      discoverSmartPhoneUrl: "discoverSmartPhoneUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [[1, "product-overview__section", "display-base"], ["class", "product-overview__section__monthly-plan", 4, "ngIf"], [1, "product-overview__section__monthly-plan"], [1, "monthly-plan--information"], [1, "mr-20", "icon-basket", "icon-width"], [1, "information--heading"], [1, "monthly-plan--action"], ["href", "", 1, "button", "button--primary", 3, "href"], [1, "mr-20", "icon-mobile", "icon-width"]],
    template: function ProductOverviewMonthlyPlanComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductOverviewMonthlyPlanComponent_div_1_Template, 14, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductOverviewMonthlyPlanComponent_div_3_Template, 14, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.addSubscriptionUrl !== "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.discoverSmartPhoneUrl !== "/");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 38452:
/*!*****************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-overview.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewComponent: () => (/* binding */ ProductOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/product-overview.constant */ 66191);
/* harmony import */ var _mappers_product_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mappers/product.mapper */ 95034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-layout */ 55606);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/promotion.service */ 1819);
/* harmony import */ var _mappers_phone_to_go_mapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mappers/phone-to-go.mapper */ 9477);
/* harmony import */ var _store_product_overview_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/product-overview.facade */ 70452);
/* harmony import */ var _mappers_profile_details_by_identity_id_mapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mappers/profile-details-by-identity-id.mapper */ 36818);
/* harmony import */ var _product_overview_monthly_plan_product_overview_monthly_plan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-overview-monthly-plan/product-overview-monthly-plan.component */ 52144);
/* harmony import */ var _product_tip_contracts_product_tip_contracts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-tip-contracts/product-tip-contracts.component */ 20824);
/* harmony import */ var _product_modem_banner_product_modem_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-modem-banner/product-modem-banner.component */ 7103);
/* harmony import */ var _product_freephone_business_product_freephone_business_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-freephone-business/product-freephone-business.component */ 77115);
/* harmony import */ var _product_c5_bundle_product_c5_bundle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-c5-bundle/product-c5-bundle.component */ 91792);
/* harmony import */ var _product_bundle_product_bundle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-bundle/product-bundle.component */ 72344);
/* harmony import */ var _product_notifications_product_notifications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-notifications/product-notifications.component */ 66302);
/* harmony import */ var _product_standalone_product_standalone_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-standalone/product-standalone.component */ 49122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_21__);
/* eslint-disable sonarjs/cognitive-complexity */


































function ProductOverviewComponent_tg_product_bundle_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "tg-product-bundle", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("streamingOptions", ctx_r0.streamingOptions)("products", ctx_r0.selectedAccountProducts)("hasSalesScope", ctx_r0.hasSalesScope)("canManageProductHolding", ctx_r0.canManageProductHolding)("changeTariffPlanUrl", ctx_r0.changeTariffPlanUrl)("manageOptionUrl", ctx_r0.manageOptionUrl)("planUpgradeUrl", ctx_r0.planUpgradeUrl)("intentRequired", ctx_r0.intentRequired)("componentInstanceID", ctx_r0.componentInstanceID);
  }
}
function ProductOverviewComponent_tg_product_standalone_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "tg-product-standalone", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("standAloneProducts", ctx_r1.selectedAccountProducts)("hasSalesScope", ctx_r1.hasSalesScope)("canManageProductHolding", ctx_r1.canManageProductHolding)("changeTariffPlanUrl", ctx_r1.changeTariffPlanUrl)("changeMobileTariffUrl", ctx_r1.changeMobileTariffUrl)("changeDTVTariffUrl", ctx_r1.changeDTVTariffUrl)("changeInternetTariffUrl", ctx_r1.changeInternetTariffUrl)("manageOptionUrl", ctx_r1.manageOptionUrl)("showStreamingSection", ctx_r1.streamingOptions.length > 0)("marketingPagesObject", ctx_r1.marketingPagesObject)("componentInstanceID", ctx_r1.componentInstanceID);
  }
}
function ProductOverviewComponent_tg_product_freephone_business_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "tg-product-freephone-business", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fpbProducts", ctx_r2.fpbProducts)("freePhoneBusinessUrl", ctx_r2.freePhoneBusinessUrl);
  }
}
function ProductOverviewComponent_tg_product_modem_banner_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "tg-product-modem-banner", 16);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("locationId", ctx_r3.selectedAccountProducts[0].locationId)("componentInstanceID", ctx_r3.componentInstanceID)("changeTariffPlanUrl", ctx_r3.changeTariffPlanUrl);
  }
}
function ProductOverviewComponent_tg_product_tip_contracts_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "tg-product-tip-contracts", 17);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("tipContracts", ctx_r4.tipContracts);
  }
}
function ProductOverviewComponent_tg_product_overview_monthly_plan_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "tg-product-overview-monthly-plan", 18);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("discoverSmartPhoneUrl", ctx_r5.discoverSmartPhoneUrl)("addSubscriptionUrl", ctx_r5.addSubscriptionUrl);
  }
}
class ProductOverviewComponent {
  ocapiService;
  productMapper;
  phoneToGoMapper;
  loginService;
  messageService;
  promotionService;
  phoneNumberTransformService;
  pathCategorisationService;
  productOverviewFacade;
  profileDetailsByIdentityIDMapper;
  changeTariffPlanUrl;
  manageOptionUrl;
  componentInstanceID;
  addSubscriptionUrl;
  discoverSmartPhoneUrl;
  freePhoneBusinessUrl;
  isAccountSelectorConsumer;
  planUpgradeUrl;
  changeDataPlanUrl;
  managePhone2GoUrl;
  intentRequired;
  dtvMarketingUrl;
  fixedLineMarketingUrl;
  internetMarketingUrl;
  mobileMarketingUrl;
  changeMobileTariffUrl;
  changeDTVTariffUrl;
  changeInternetTariffUrl;
  messageGroupName = 'product-overview';
  scopes = ['productholding'];
  status = [_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVE_STATUS, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.SUSPENDED_STATUS, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTED_STATUS].join(',');
  selectedAccountProducts = [];
  fpbProducts = [];
  hasSalesScope = false;
  canManageProductHolding = false;
  streamingOptions = [];
  tipContracts;
  showYUPNotificationMessage = false;
  showSuspendedPlanNotificationMessage = false;
  showMoveNotificationMessage = false;
  showModemUpgradeBanner = false;
  phoneToGoNumbers = [];
  marketingPagesObject;
  unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  constructor(ocapiService, productMapper, phoneToGoMapper, loginService, messageService, promotionService, phoneNumberTransformService, pathCategorisationService, productOverviewFacade, profileDetailsByIdentityIDMapper) {
    this.ocapiService = ocapiService;
    this.productMapper = productMapper;
    this.phoneToGoMapper = phoneToGoMapper;
    this.loginService = loginService;
    this.messageService = messageService;
    this.promotionService = promotionService;
    this.phoneNumberTransformService = phoneNumberTransformService;
    this.pathCategorisationService = pathCategorisationService;
    this.productOverviewFacade = productOverviewFacade;
    this.profileDetailsByIdentityIDMapper = profileDetailsByIdentityIDMapper;
  }
  ngOnInit() {
    this.writeConfigToState();
  }
  initAfterLoggedIn() {
    this.productOverviewFacade.selectedAccountProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe(products => {
      this.selectedAccountProducts = products;
    });
    this.productOverviewFacade.freePhoneBusinessProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe(products => {
      this.fpbProducts = products;
    });
    this.productOverviewFacade.scopes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe(scopes => {
      this.hasSalesScope = scopes.hasSalesScope;
      this.canManageProductHolding = scopes.canManageProductHolding;
    });
    this.marketingPagesObject = {
      dtv: this.dtvMarketingUrl,
      fixed: this.fixedLineMarketingUrl,
      internet: this.internetMarketingUrl,
      mobile: this.mobileMarketingUrl
    };
    this.productOverviewFacade.setMarketingPages(this.marketingPagesObject);
    this.loadProducts();
  }
  loadProducts() {
    const endPoint = this.getServiceURI(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PRODUCT_SERVICE_PREFIX, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.API_VERSION_V1, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.CONTEXT_PRODUCT, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.EMPTY, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.EMPTY, `?status=${this.status}`);
    const config = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(this.messageGroupName, endPoint, this.productMapper, null);
    const ocapiGet$ = this.ocapiService.doGet(config);
    const tipContracts = details => this.checkShowTipContracts(details) ? this.initTIPContracts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]))) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    const profileDetails = details => details.isPid ? this.getProfileDetailsByIdentityId(details.identityId) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(details.username);
    const loginDetails$ = this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(details => {
      // we want to pass the result of the loginDetails also to the subscribe. If there is no TIPContracts call, then we return empty array.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(details), tipContracts(details), profileDetails(details)]);
    }));
    // we need a behaviourSubject for BASE. Otherwise, the combineLatest will not trigger.
    const accountSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(new CustomEvent(''));
    if (this.isAccountSelectorConsumer) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'selectedAccountModified').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe(accountSelected$);
    }
    const products$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([ocapiGet$, loginDetails$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([ocapiResponse, [loginDetailsResponse, tipContractsResponse, profileDetailsByIdResponse]]) => {
      const products = ocapiResponse;
      this.tipContracts = tipContractsResponse.filter(tc => tc.status?.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVE_STATUS);
      /*
         STILLTOCHECK
         - filter product options
         - update rates
         - something with handsets?
         - phone numbers to go
         - how to get error messages when calls fail
        */
      const loginDetailsScopes = loginDetailsResponse.scopes || [];
      let normalizedMsisdn = '';
      if (typeof profileDetailsByIdResponse === 'string') {
        normalizedMsisdn = this.normalizedMsisdn(profileDetailsByIdResponse);
      }
      const loggedInMainProduct = products.find(p => p.identifier.replace(/\s/g, '') === normalizedMsisdn?.replace(/\s/g, ''));
      const isPrepaidLogin = loggedInMainProduct?.productInfo?.hasCategory(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE) || false;
      if (isPrepaidLogin && loginDetailsResponse.isMember()) {
        this.scopes.push('productholding:p');
      }
      const hasSalesScope = loginDetailsScopes.includes('sales') || isPrepaidLogin;
      const canManageProductHolding = loginDetailsScopes.includes('manageproductholding') || isPrepaidLogin;
      this.productOverviewFacade.setScopes({
        isPrepaidLogin,
        hasSalesScope,
        canManageProductHolding
      });
      return products;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(products => {
      this.handlePhoneToGoProduct(products);
      return products;
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([products$, accountSelected$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe({
      next: ([products, selectedAccountEvent]) => {
        const locationId = selectedAccountEvent.detail?.selectedAccount?.locationId;
        const selectedAccountProducts = this.filterAndSortSelectedAccountProducts(products, locationId);
        this.setIsProductUnderMove(selectedAccountProducts, products);
        this.streamingOptions = this.checkAndUpdateStreamingOptions(selectedAccountProducts);
        // Extract FreePhone Business products
        const fpbProducts = selectedAccountProducts.filter(product => product.productInfo.isFPBProduct);
        this.renderNoProductErrorMessage(this.tipContracts, selectedAccountProducts);
        this.showYUPNotificationMessage = this.showYUPNotification(selectedAccountProducts);
        this.showSuspendedPlanNotificationMessage = this.showSuspendedPlan(selectedAccountProducts);
        this.showMoveNotificationMessage = this.showMoveNotification(selectedAccountProducts);
        this.showModemUpgradeBanner = this.showModeBanner(selectedAccountProducts);
        // Update store
        this.productOverviewFacade.setSelectedAccountProducts(selectedAccountProducts);
        this.productOverviewFacade.setFreePhoneBusinessProducts(fpbProducts);
      },
      error: () => {
        /// STILLTOCHECK
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.ErrorMessage('product-overview', _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.GENERIC_ERROR_CODE));
      }
    });
  }
  handlePhoneToGoProduct(products) {
    const phoneToGoProduct = products.some(product => {
      return product.children.some(child => {
        return child.productType === 'phone2go';
      });
    });
    if (phoneToGoProduct) {
      const endPointPhoneToGo = this.getServiceURI(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.RESOURCE_SERVICE_PREFIX, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.API_VERSION_V1, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.CONTEXT_PHONE_TO_GO, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.EMPTY, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.EMPTY, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.EMPTY);
      const phoneToGoConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(this.messageGroupName, endPointPhoneToGo, this.phoneToGoMapper, null);
      this.ocapiService.doGet(phoneToGoConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe({
        next: phoneToGoResponse => {
          this.phoneToGoNumbers = phoneToGoResponse;
        },
        error: error => {
          // STILLTOCHECK
          console.log(error);
        }
      });
    }
  }
  filterAndSortSelectedAccountProducts(products, locationId) {
    let selectedAccountProducts = [];
    if (locationId) {
      selectedAccountProducts = products.filter(pr => pr.locationId === locationId);
    } else {
      selectedAccountProducts = products;
    }
    // We filter out the DISCONNECTED_STATUS and DISCONNECTION_PASSED_PONR_STATUS, we do need this in the products array because of the isUnderMove stuff
    selectedAccountProducts = selectedAccountProducts.filter(product => ![_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTED_STATUS].includes(product.status));
    selectedAccountProducts.sort((a, b) => {
      return (a.productInfo.weight || 0) - (b.productInfo.weight || 0);
    });
    return selectedAccountProducts;
  }
  showYUPNotification(products) {
    return products.some(product => product.productInfo.isYupProduct);
  }
  showSuspendedPlan(products) {
    return products.some(product => product.isProductSuspended());
  }
  showMoveNotification(products) {
    return products.some(product => product.isUnderMove);
  }
  showModeBanner(products) {
    return products.some(product => product.showModemUpgradeBanner);
  }
  setIsProductUnderMove(selectedAccountProducts, products) {
    selectedAccountProducts.forEach(selectedProduct => {
      let identifier = selectedProduct.identifier;
      if (selectedProduct.parentIdentifier) {
        identifier = selectedProduct.parentIdentifier;
      }
      products.forEach(product => {
        if (identifier === product.identifier && selectedProduct.addressId !== product.addressId && (selectedProduct.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS || selectedProduct.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS)) {
          selectedProduct.isUnderMove = true;
        }
      });
    });
  }
  // This is to check if the person can have discounts.
  checkShowTipContracts(loginDetailsResponse) {
    if (this.pathCategorisationService.getCustomerBrand() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.BRAND_TELENET) {
      return !(loginDetailsResponse.isFleetManager() || loginDetailsResponse.isFleetUser() || loginDetailsResponse.isMember());
    }
    return false;
  }
  initTIPContracts() {
    return this.promotionService.getTIPContracts(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.MESSAGE_GROUP).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$));
  }
  checkAndUpdateStreamingOptions(products) {
    let streamingOptions = [];
    products.forEach(product => {
      product.options?.forEach(option => {
        if (_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STREAMING_SERVICE_CATEGORY_RULES.some(sscr => {
          return option.productInfo.categories?.includes(sscr);
        })) {
          streamingOptions.push(option);
        }
      });
    });
    streamingOptions = streamingOptions.sort((a, b) => {
      return (a.productInfo.weight || 0) - (b.productInfo.weight || 0);
    });
    return streamingOptions;
  }
  getServiceURI(base, version, context, suffix, endpoint, queryParams) {
    const uri = base.concat(version).concat(context).concat(suffix).concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }
  normalizedMsisdn(msisdn) {
    return this.phoneNumberTransformService.transform(msisdn);
  }
  renderNoProductErrorMessage(tipContracts, products) {
    if (tipContracts.length === 0 && products.length === 0) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.ErrorMessage('product-overview-with-comp', 'product-overview.error.no-products'));
    }
  }
  writeConfigToState() {
    const config = {
      changeTariffPlanUrl: this.changeTariffPlanUrl,
      manageOptionUrl: this.manageOptionUrl,
      componentInstanceID: this.componentInstanceID,
      addSubscriptionUrl: this.addSubscriptionUrl,
      discoverSmartPhoneUrl: this.discoverSmartPhoneUrl,
      freePhoneBusinessUrl: this.freePhoneBusinessUrl,
      isAccountSelectorConsumer: this.isAccountSelectorConsumer,
      planUpgradeUrl: this.planUpgradeUrl,
      intentRequired: this.intentRequired
    };
    this.productOverviewFacade.setConfig(config);
  }
  getProfileDetailsByIdentityId(identityId) {
    const suffix = '/' + identityId;
    const endPoint = this.getServiceURI(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.CUSTOMER_SERVICE_PREFIX, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.API_VERSION_V1, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ENDPOINT_IDENTITY, suffix, _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.EMPTY);
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiCallConfig(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.MESSAGE_GROUP_CUSTOMER, endPoint, this.profileDetailsByIdentityIDMapper);
    return this.ocapiService.doGet(ocapiConfig);
  }
  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
  static ɵfac = function ProductOverviewComponent_Factory(t) {
    return new (t || ProductOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_mappers_product_mapper__WEBPACK_IMPORTED_MODULE_3__.ProductMapper), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_mappers_phone_to_go_mapper__WEBPACK_IMPORTED_MODULE_10__.PhoneToGoMapper), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_promotion_service__WEBPACK_IMPORTED_MODULE_9__.PromotionService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberTransformService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.PathCategorisationService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_store_product_overview_facade__WEBPACK_IMPORTED_MODULE_11__.ProductOverviewFacade), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_mappers_profile_details_by_identity_id_mapper__WEBPACK_IMPORTED_MODULE_12__.ProfileDetailsByIdentityIDMapper));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: ProductOverviewComponent,
    selectors: [["tg-product-overview"]],
    inputs: {
      changeTariffPlanUrl: "changeTariffPlanUrl",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      addSubscriptionUrl: "addSubscriptionUrl",
      discoverSmartPhoneUrl: "discoverSmartPhoneUrl",
      freePhoneBusinessUrl: "freePhoneBusinessUrl",
      isAccountSelectorConsumer: "isAccountSelectorConsumer",
      planUpgradeUrl: "planUpgradeUrl",
      changeDataPlanUrl: "changeDataPlanUrl",
      managePhone2GoUrl: "managePhone2GoUrl",
      intentRequired: "intentRequired",
      dtvMarketingUrl: "dtvMarketingUrl",
      fixedLineMarketingUrl: "fixedLineMarketingUrl",
      internetMarketingUrl: "internetMarketingUrl",
      mobileMarketingUrl: "mobileMarketingUrl",
      changeMobileTariffUrl: "changeMobileTariffUrl",
      changeDTVTariffUrl: "changeDTVTariffUrl",
      changeInternetTariffUrl: "changeInternetTariffUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 25,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "enableLoader"], [3, "messageGroupName", "scopes", "componentCanRender"], [1, "product-overview"], [3, "showYUPNotificationMessage", "showSuspendedPlanNotificationMessage", "showMoveNotificationMessage"], [3, "streamingOptions", "products", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "manageOptionUrl", "planUpgradeUrl", "intentRequired", "componentInstanceID", 4, "ngIf"], [3, "showStreamingSection", "setSelectedProducts", "canManageProductHolding", "planUpgradeUrl", "changeDataPlanUrl", "managePhone2GoUrl", "intentRequired", "manageOptionUrl", "componentInstanceID", "changeTariffPlanUrl", "phoneToGoNumbers", "streamingOptions", "hasSalesScope"], [3, "standAloneProducts", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "changeMobileTariffUrl", "changeDTVTariffUrl", "changeInternetTariffUrl", "manageOptionUrl", "showStreamingSection", "marketingPagesObject", "componentInstanceID", 4, "ngIf"], [3, "fpbProducts", "freePhoneBusinessUrl", 4, "ngIf"], [3, "locationId", "componentInstanceID", "changeTariffPlanUrl", 4, "ngIf"], [3, "tipContracts", 4, "ngIf"], [3, "discoverSmartPhoneUrl", "addSubscriptionUrl", 4, "ngIf"], [3, "streamingOptions", "products", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "manageOptionUrl", "planUpgradeUrl", "intentRequired", "componentInstanceID"], [3, "standAloneProducts", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "changeMobileTariffUrl", "changeDTVTariffUrl", "changeInternetTariffUrl", "manageOptionUrl", "showStreamingSection", "marketingPagesObject", "componentInstanceID"], [3, "fpbProducts", "freePhoneBusinessUrl"], [3, "locationId", "componentInstanceID", "changeTariffPlanUrl"], [3, "tipContracts"], [3, "discoverSmartPhoneUrl", "addSubscriptionUrl"]],
    template: function ProductOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "app-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "tg-login", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("componentCanRender", function ProductOverviewComponent_Template_tg_login_componentCanRender_3_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](5, "tg-product-notifications", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, ProductOverviewComponent_tg_product_bundle_6_Template, 1, 9, "tg-product-bundle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "tg-product-c5-bundle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, ProductOverviewComponent_tg_product_standalone_8_Template, 1, 11, "tg-product-standalone", 8)(9, ProductOverviewComponent_tg_product_freephone_business_9_Template, 1, 2, "tg-product-freephone-business", 9)(10, ProductOverviewComponent_tg_product_modem_banner_10_Template, 1, 3, "tg-product-modem-banner", 10)(11, ProductOverviewComponent_tg_product_tip_contracts_11_Template, 1, 1, "tg-product-tip-contracts", 11)(12, ProductOverviewComponent_tg_product_overview_monthly_plan_12_Template, 1, 2, "tg-product-overview-monthly-plan", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("enableLoader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName)("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("showYUPNotificationMessage", ctx.showYUPNotificationMessage)("showSuspendedPlanNotificationMessage", ctx.showSuspendedPlanNotificationMessage)("showMoveNotificationMessage", ctx.showMoveNotificationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.fpbProducts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("showStreamingSection", ctx.streamingOptions.length > 0)("setSelectedProducts", ctx.selectedAccountProducts)("canManageProductHolding", ctx.canManageProductHolding)("planUpgradeUrl", ctx.planUpgradeUrl)("changeDataPlanUrl", ctx.changeDataPlanUrl)("managePhone2GoUrl", ctx.managePhone2GoUrl)("intentRequired", ctx.intentRequired)("manageOptionUrl", ctx.manageOptionUrl)("componentInstanceID", ctx.componentInstanceID)("changeTariffPlanUrl", ctx.changeTariffPlanUrl)("phoneToGoNumbers", ctx.phoneToGoNumbers)("streamingOptions", ctx.streamingOptions)("hasSalesScope", ctx.hasSalesScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.selectedAccountProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.fpbProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.selectedAccountProducts.length > 0 && ctx.showModemUpgradeBanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.tipContracts == null ? null : ctx.tipContracts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.hasSalesScope);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent, _product_overview_monthly_plan_product_overview_monthly_plan_component__WEBPACK_IMPORTED_MODULE_13__.ProductOverviewMonthlyPlanComponent, _product_tip_contracts_product_tip_contracts_component__WEBPACK_IMPORTED_MODULE_14__.ProductTipContractsComponent, _product_modem_banner_product_modem_banner_component__WEBPACK_IMPORTED_MODULE_15__.ProductModemBannerComponent, _product_freephone_business_product_freephone_business_component__WEBPACK_IMPORTED_MODULE_16__.ProductFreePhoneBusinessComponent, _product_c5_bundle_product_c5_bundle_component__WEBPACK_IMPORTED_MODULE_17__.ProductC5BundleComponent, _product_bundle_product_bundle_component__WEBPACK_IMPORTED_MODULE_18__.ProductBundleComponent, _product_notifications_product_notifications_component__WEBPACK_IMPORTED_MODULE_19__.ProductNotificationsComponent, _product_standalone_product_standalone_component__WEBPACK_IMPORTED_MODULE_20__.ProductStandaloneComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3715:
/*!**********************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-specifications/product-specifications.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationsComponent: () => (/* binding */ ProductSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product.model */ 72929);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/phone-number.pipe */ 3146);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-extra-options/product-extra-options.component */ 11617);
/* harmony import */ var _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-included-options/product-included-options.component */ 22591);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-options-specifications/product-options-specifications.component */ 73766);
/* harmony import */ var _product_level_specifications_product_level_specifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-level-specifications/product-level-specifications.component */ 37762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);


















function ProductSpecificationsComponent_ng_container_3_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 10);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "dropdown");
  }
}
function ProductSpecificationsComponent_ng_container_3_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 11);
  }
}
function ProductSpecificationsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProductSpecificationsComponent_ng_container_3_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r4.toggleVisiblityFeature(!ctx_r4.showFeature));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown", function ProductSpecificationsComponent_ng_container_3_Template_a_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r6.onKeydown($event, !ctx_r6.showFeature));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ProductSpecificationsComponent_ng_container_3_i_7_Template, 1, 1, "i", 8)(8, ProductSpecificationsComponent_ng_container_3_i_8_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 5, "ng.product-overview.lbl.feature-included"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-expanded", ctx_r0.showFeature ? "true" : "false")("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 7, "ng.product-overview.lbl.feature-included"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.showFeature);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.showFeature);
  }
}
const _c0 = a0 => ({
  amount: a0
});
const _c1 = a0 => ({
  unit: a0
});
function ProductSpecificationsComponent_div_4_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 20)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 21)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rate_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 5, "ng.product-overview.lbl." + rate_r15.type)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 7, "ng.product-overview.text.specifications-for-base-zero-value", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](13, _c0, rate_r15.cost)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](12, 10, "ng.product-overview.text.specifications-for-base-zero-unit", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](15, _c1, rate_r15.unit)), " ");
  }
}
const _c2 = a0 => ({
  "pre-paid": a0
});
function ProductSpecificationsComponent_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ProductSpecificationsComponent_div_4_div_4_div_3_Template, 13, 17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c2, ctx_r7.product.productInfo.hasCategory(ctx_r7.PREPAID_MOBILE)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r7.product.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r7.product.productInfo.rates);
  }
}
function ProductSpecificationsComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-level-specifications", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", ctx_r8.product)("isBundle", ctx_r8.isBundle);
  }
}
function ProductSpecificationsComponent_div_4_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r16.product.identifier));
  }
}
function ProductSpecificationsComponent_div_4_div_6_ng_container_5_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.esim-active"), " ");
  }
}
function ProductSpecificationsComponent_div_4_div_6_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ProductSpecificationsComponent_div_4_div_6_ng_container_5_div_1_div_5_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const line_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, line_r19.identifier));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", line_r19.eSimStatus === "Active");
  }
}
function ProductSpecificationsComponent_div_4_div_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductSpecificationsComponent_div_4_div_6_ng_container_5_div_1_Template, 6, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r17.product.mobileIdentifier);
  }
}
function ProductSpecificationsComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 23)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProductSpecificationsComponent_div_4_div_6_div_4_Template, 3, 3, "div", 24)(5, ProductSpecificationsComponent_div_4_div_6_ng_container_5_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "ng.product-overview.text.available-numbers"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !(ctx_r9.product.mobileIdentifier == null ? null : ctx_r9.product.mobileIdentifier.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r9.product.mobileIdentifier == null ? null : ctx_r9.product.mobileIdentifier.length);
  }
}
function ProductSpecificationsComponent_div_4_div_7_div_1_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, "ng.product-overview.lbl.monetary-amount", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, handset_r22.contract.price == null ? null : handset_r22.contract.price.earlyTerminationFee)), " ");
  }
}
function ProductSpecificationsComponent_div_4_div_7_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProductSpecificationsComponent_div_4_div_7_div_1_div_19_div_4_Template, 3, 6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "ng.product-overview.text.contract-TerminationFee"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", handset_r22.contract == null ? null : handset_r22.contract.price == null ? null : handset_r22.contract.price.earlyTerminationFee);
  }
}
function ProductSpecificationsComponent_div_4_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 32)(5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 34)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 32)(13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ProductSpecificationsComponent_div_4_div_7_div_1_div_19_Template, 5, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 7, "ng.product-overview.text.contract-information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 9, "ng.product-overview.text.contract-duration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", handset_r22.contract.duration, " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 11, "ng.product-overview.lbl.months"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 13, "ng.product-overview.text.contract-obligationEndDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](18, 15, handset_r22.contract.obligationEndDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r21.product.hasValidPrice(handset_r22.contract == null ? null : handset_r22.contract.price == null ? null : handset_r22.contract.price.earlyTerminationFee));
  }
}
function ProductSpecificationsComponent_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductSpecificationsComponent_div_4_div_7_div_1_Template, 20, 18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r10.product.handsets);
  }
}
function ProductSpecificationsComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-options-specifications", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isTelenetBrand", ctx_r11.isTelenetBrand)("services", ctx_r11.product.productInfo.services);
  }
}
function ProductSpecificationsComponent_div_4_tg_product_included_options_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-product-included-options", 39);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isTelenetBrand", ctx_r12.isTelenetBrand)("product", ctx_r12.product);
  }
}
function ProductSpecificationsComponent_div_4_tg_product_extra_options_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-product-extra-options", 40);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", ctx_r13.product);
  }
}
function ProductSpecificationsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 12)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProductSpecificationsComponent_div_4_div_4_Template, 4, 5, "div", 13)(5, ProductSpecificationsComponent_div_4_div_5_Template, 2, 2, "div", 3)(6, ProductSpecificationsComponent_div_4_div_6_Template, 6, 5, "div", 14)(7, ProductSpecificationsComponent_div_4_div_7_Template, 2, 1, "div", 3)(8, ProductSpecificationsComponent_div_4_div_8_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ProductSpecificationsComponent_div_4_tg_product_included_options_9_Template, 1, 2, "tg-product-included-options", 16)(10, ProductSpecificationsComponent_div_4_tg_product_extra_options_10_Template, 1, 1, "tg-product-extra-options", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.product.productInfo.isShowRates());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.product.productInfo.isShowRates() && (ctx_r1.product.productInfo.services == null ? null : ctx_r1.product.productInfo.services.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.product.identifier && ctx_r1.product.productType === "mobile" && ctx_r1.isBundle);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.product == null ? null : ctx_r1.product.handsets == null ? null : ctx_r1.product.handsets.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r1.product.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (ctx_r1.product.hasIncludedOptions || (ctx_r1.product.contentPacks == null ? null : ctx_r1.product.contentPacks.length)) && ctx_r1.isTelenetBrand);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.product.hasExtraOptions && ctx_r1.isTelenetBrand);
  }
}
const _c3 = a0 => ({
  "background-shade_04 p--l mt--m": a0
});
class ProductSpecificationsComponent {
  urlService;
  dataLayerService;
  productOverviewService;
  products;
  product;
  hasSalesScope = false;
  canManageProductHolding = false;
  changeTariffPlanUrl;
  manageOptionUrl;
  componentInstanceID;
  isBundle = false;
  isTelenetBrand = true;
  set showSpecs(visible) {
    if (!this.isTelenetBrand) {
      this.toggleVisiblityFeature(visible);
    }
  }
  showFeature = false;
  PREPAID_MOBILE = _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE;
  constructor(urlService, dataLayerService, productOverviewService) {
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
  }
  toggleVisiblityFeature(visible) {
    this.showFeature = visible;
    if (this.showFeature && this.product.productInfo) {
      const eventInfoData = this.dataLayerService.createEventInfo(_constants_events_constant__WEBPACK_IMPORTED_MODULE_4__.EventsConstants.EVENT_NAME_TARIFF_PLAN, _constants_events_constant__WEBPACK_IMPORTED_MODULE_4__.EventsConstants.EVENT_TYPE_VIEW_PRODUCT_DETAILS);
      const attributes = {};
      if (this.product.productInfo.productType === 'bundle') {
        const spec = this.product.productSpec;
        attributes[_constants_events_constant__WEBPACK_IMPORTED_MODULE_4__.EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(spec);
      } else {
        attributes[_constants_events_constant__WEBPACK_IMPORTED_MODULE_4__.EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(this.product.productInfo);
      }
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID, attributes);
    }
  }
  changeTariffPlan(productIdentifier, e) {
    e.stopPropagation();
    this.urlService.redirectTo(`${this.changeTariffPlanUrl}?flow=care&item=${productIdentifier}`);
  }
  manageOptions(product, e) {
    e.stopPropagation();
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${product?.identifier}&flow=${_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (product?.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product?.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product?.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  showManageOptions(product) {
    let isPrepaid = false;
    if (product.productInfo.categories?.length) {
      isPrepaid = product.productInfo.categories.some(item => {
        return item.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE.toUpperCase();
      });
    }
    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  /*
  STILLTOCHECK: is this necessary. was converted but not used
  getBundleSpecifications(product: Product) {
    const specs = this.products[0]?.productInfo?.specifications || [];
       return specs.filter((spec) => {
      switch (product.productType) {
        case 'internet':
          return spec.serviceType === 'fixed_internet';
        case 'mobile':
          return this.filterMobileSpecs(product, spec);
        case 'dtv':
          return spec.serviceType === 'dtv';
        case 'telephone':
          return spec.serviceType === 'fixed_calling';
        case 'streaming':
          return spec.serviceType === 'streaming';
        default:
          return false;
      }
    });
  }
     filterMobileSpecs(product: Product, spec: SpecificationInterface) {
    if (product.productInfo.productType === 'data-only-mobile-line') {
      return spec.serviceType === 'mobile_internet';
    }
    return spec.serviceType === 'mobile_internet' || spec.serviceType === 'mobile_calling';
  }
  */
  getViewedProducts(productInfo) {
    if (productInfo) {
      const product = {
        productInfo: {
          productType: productInfo.productType,
          productID: productInfo.externalProductCode
        }
      };
      return [product];
    }
    return [];
  }
  onKeydown(event, visible) {
    if (event.key === 'Enter') {
      this.toggleVisiblityFeature(visible);
    }
  }
  static ɵfac = function ProductSpecificationsComponent_Factory(t) {
    return new (t || ProductSpecificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_5__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ProductSpecificationsComponent,
    selectors: [["tg-product-specifications"]],
    inputs: {
      products: "products",
      product: "product",
      hasSalesScope: "hasSalesScope",
      canManageProductHolding: "canManageProductHolding",
      changeTariffPlanUrl: "changeTariffPlanUrl",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      isBundle: "isBundle",
      isTelenetBrand: "isTelenetBrand",
      showSpecs: "showSpecs"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "row"], [1, "col-xs-12"], [3, "ngClass"], [4, "ngIf"], ["id", "product_specifications_product_info", 4, "ngIf"], [1, "display--flex", "justify-content--between", "cursor--pointer", "align-items--center", 3, "click"], [1, "text-font-family--t7"], ["tabindex", "0", "aria-controls", "product_specifications_product_info", 3, "keydown"], ["class", "icon icon-md icon-chevron-down product-overview__icon-section", 4, "ngIf"], ["class", "icon icon-md icon-chevron-up product-overview__icon-section", 4, "ngIf"], [1, "icon", "icon-md", "icon-chevron-down", "product-overview__icon-section"], [1, "icon", "icon-md", "icon-chevron-up", "product-overview__icon-section"], ["id", "product_specifications_product_info"], ["class", "pt--xs", 3, "ngClass", 4, "ngIf"], ["class", "pt--xs", 4, "ngIf"], ["class", "product-overview__hide-base", 4, "ngIf"], [3, "isTelenetBrand", "product", 4, "ngIf"], [3, "product", 4, "ngIf"], [1, "pt--xs", 3, "ngClass"], ["class", "display--flex--md justify-content--between pt--xs", 4, "ngFor", "ngForOf"], [1, "display--flex--md", "justify-content--between", "pt--xs"], [1, "text-weight--l", "mt--n--md", "mt--xxs"], [3, "product", "isBundle"], [1, "pt--xs"], ["class", "pt--m", 4, "ngIf"], [1, "pt--m"], [4, "ngFor", "ngForOf"], [1, "display--flex", "mt--m", "align-items--center"], ["class", "pl--s", 4, "ngIf"], [1, "pl--s"], [1, "status-indicator", "status-indicator--positive"], [1, "mt--xs", "text-weight--l"], [1, "row", "display--flex--md", "justify-content--between", "pt--xs", "line-height--24"], [1, "col-md-10", "col-xs-12"], [1, "col-md-2", "col-xs-12", "text-align--right--md", "text-weight--l", "mt--n--md", "mt--xxs"], ["class", "row display--flex--md justify-content--between pt--xs line-height--24", 4, "ngIf"], ["class", "col-md-2 col-xs-12 text-align--right--md text-weight--l mt--n--md mt--xxs", 4, "ngIf"], [1, "product-overview__hide-base"], [3, "isTelenetBrand", "services"], [3, "isTelenetBrand", "product"], [3, "product"]],
    template: function ProductSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ProductSpecificationsComponent_ng_container_3_Template, 9, 9, "ng-container", 3)(4, ProductSpecificationsComponent_div_4_Template, 11, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c3, ctx.isTelenetBrand));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isTelenetBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showFeature);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _product_level_specifications_product_level_specifications_component__WEBPACK_IMPORTED_MODULE_11__.ProductLevelSpecificationsComponent, _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_10__.ProductOptionsSpecificationsComponent, _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_9__.ProductIncludedOptionsComponent, _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_8__.ProductExtraOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 49122:
/*!**************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-standalone/product-standalone.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductStandaloneComponent: () => (/* binding */ ProductStandaloneComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grand-fathering-social-tariff-notification/grand-fathering-social-tariff-notification.component */ 22563);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 42037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/phone-number.pipe */ 3146);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-extra-options/product-extra-options.component */ 11617);
/* harmony import */ var _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-included-options/product-included-options.component */ 22591);
/* harmony import */ var _product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product-specifications/product-specifications.component */ 3715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_14__);




















function ProductStandaloneComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0);
  }
}
const _c0 = () => [];
const _c1 = (a0, a2) => ({
  product: a0,
  index: "",
  visibilityArray: a2
});
function ProductStandaloneComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](3, _c1, product_r5, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](2, _c0)));
  }
}
function ProductStandaloneComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.products);
  }
}
function ProductStandaloneComponent_ng_container_2_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0);
  }
}
const _c2 = (a0, a1, a2) => ({
  product: a0,
  index: a1,
  visibilityArray: a2
});
function ProductStandaloneComponent_ng_container_2_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_2_div_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction3"](2, _c2, product_r11, index_r12, ctx_r10.mobileProductsVisible));
  }
}
function ProductStandaloneComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6)(1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ProductStandaloneComponent_ng_container_2_div_1_ng_container_4_Template, 2, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, ctx_r7.mobileProducts[0].productType));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r7.mobileProducts);
  }
}
function ProductStandaloneComponent_ng_container_2_div_2_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0);
  }
}
function ProductStandaloneComponent_ng_container_2_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_2_div_2_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction3"](2, _c2, product_r15, index_r16, ctx_r14.internetProductsVisible));
  }
}
const _c3 = a0 => ({
  "mt-0": a0
});
function ProductStandaloneComponent_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6)(1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ProductStandaloneComponent_ng_container_2_div_2_ng_container_4_Template, 2, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](5, _c3, ctx_r8.mobileProducts.length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, ctx_r8.internetProducts[0].productType), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r8.internetProducts);
  }
}
function ProductStandaloneComponent_ng_container_2_div_3_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0);
  }
}
function ProductStandaloneComponent_ng_container_2_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_2_div_3_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r19 = ctx.$implicit;
    const index_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction3"](2, _c2, product_r19, index_r20, ctx_r18.tvProductsVisible));
  }
}
function ProductStandaloneComponent_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ProductStandaloneComponent_ng_container_2_div_3_ng_container_4_Template, 2, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, ctx_r9.tvProducts[0].productType));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r9.tvProducts);
  }
}
function ProductStandaloneComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_2_div_1_Template, 5, 4, "div", 5)(2, ProductStandaloneComponent_ng_container_2_div_2_Template, 5, 7, "div", 5)(3, ProductStandaloneComponent_ng_container_2_div_3_Template, 5, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.mobileProducts == null ? null : ctx_r1.mobileProducts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.internetProducts == null ? null : ctx_r1.internetProducts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.tvProducts == null ? null : ctx_r1.tvProducts.length);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.info.unable-to-manage"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" + ", product_r22.handsets[0].handsetName, " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.esim-active"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_div_14_div_1_Template, 4, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 36)(3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.eSimStatus === "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 2, product_r22.identifier));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 40)(1, "div", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, product_r22.identifier));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-activation-in-progress"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-disconnection-in-progress"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 41)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-modification-in-progress"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 42)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-suspended"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 43)(1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown", function ProductStandaloneComponent_ng_template_3_div_0_div_21_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r46);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r44.handleRedirectToMarketingPage($event, product_r22));
    })("click", function ProductStandaloneComponent_ng_template_3_div_0_div_21_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r46);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r47.redirectToMarketingPage(product_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "ng.product-overview.btn.change-tariff-plan"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_22_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown", function ProductStandaloneComponent_ng_template_3_div_0_div_22_a_1_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r52);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r50.handleManageOptions($event, product_r22));
    })("click", function ProductStandaloneComponent_ng_template_3_div_0_div_22_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r52);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r53.manageOptions(product_r22, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_div_22_a_1_Template, 3, 3, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductActive() && !product_r22.isMultipleDTV || !product_r22.productType);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown", function ProductStandaloneComponent_ng_template_3_div_0_div_25_Template_a_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r56.handleRedirectToMarketingPage($event, product_r22));
    })("click", function ProductStandaloneComponent_ng_template_3_div_0_div_25_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r59.redirectToMarketingPage(product_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 1, "ng.product-overview.btn.change-tariff-plan"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_26_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown", function ProductStandaloneComponent_ng_template_3_div_0_div_26_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r62.handleManageOptions($event, product_r22));
    })("click", function ProductStandaloneComponent_ng_template_3_div_0_div_26_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r64);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r65.manageOptions(product_r22, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 50)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ProductStandaloneComponent_ng_template_3_div_0_div_26_a_2_Template, 3, 3, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductActive() && !product_r22.isMultipleDTV);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_2_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4).product;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r73.changeTariffPlan(product_r22, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.change-tariff-plan"), " ");
  }
}
const _c4 = (a0, a1) => ({
  "text-align--right": a0,
  "text-align--right ml--m--md": a1
});
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_2_div_1_Template, 3, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](2, _c4, !ctx_r68.showManageOptions(product_r22), ctx_r68.showManageOptions(product_r22)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r68.changeTariffPlanUrl !== "/");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 56)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_4_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r77.manageOptions(product_r22, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](4, _c4, !ctx_r69.showChangePlan(product_r22), ctx_r69.showManageOptions(product_r22)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 60);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("data-cy", "dropdown");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 61);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_2_Template, 2, 5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_div_4_Template, 4, 7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_i_5_Template, 1, 1, "i", 54)(6, ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_i_6_Template, 1, 0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    const product_r22 = ctx_r81.product;
    const visibilityArray_r24 = ctx_r81.visibilityArray;
    const index_r23 = ctx_r81.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r38.showChangePlan(product_r22) && product_r22.isProductActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r38.showManageOptions(product_r22) && product_r22.isProductActive() && !product_r22.isMultipleDTV);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !visibilityArray_r24[index_r23]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", visibilityArray_r24[index_r23]);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_tg_product_included_options_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tg-product-included-options", 66);
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isTelenetBrand", ctx_r82.isTelenetBrand)("product", product_r22);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_tg_product_extra_options_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tg-product-extra-options", 66);
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("isTelenetBrand", ctx_r83.isTelenetBrand)("product", product_r22);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_div_6_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r88.changeTariffPlan(product_r22, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ng.product-overview.btn.change-tariff-plan"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_div_8_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r93);
      const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3).product;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r91.manageOptions(product_r22, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
const _c5 = a0 => ({
  "mr--m": a0
});
function ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_tg_product_included_options_2_Template, 1, 2, "tg-product-included-options", 62)(3, ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_tg_product_extra_options_3_Template, 1, 2, "tg-product-extra-options", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 63)(5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_div_6_Template, 3, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_div_8_Template, 3, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).product;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.hasIncludedOptions || (product_r22.contentPacks == null ? null : product_r22.contentPacks.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.hasExtraOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](5, _c5, ctx_r39.showManageOptions(product_r22)));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r39.hasSalesScope && product_r22.isProductActive() && ctx_r39.changeTariffPlanUrl !== "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductActive() && !product_r22.isMultipleDTV);
  }
}
const _c6 = a0 => ({
  "cursor--pointer": a0
});
const _c7 = (a0, a1) => ({
  "col-md-11": a0,
  "col-md-6": a1
});
const _c8 = a0 => ({
  "mt--xs": a0
});
const _c9 = (a0, a1) => ({
  "col-md-1": a0,
  "col-md-6": a1
});
function ProductStandaloneComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_div_1_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      const visibilityArray_r24 = ctx_r96.visibilityArray;
      const index_r23 = ctx_r96.index;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](visibilityArray_r24[index_r23] = !visibilityArray_r24[index_r23]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 17)(9, "div", 18)(10, "div", 19)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, ProductStandaloneComponent_ng_template_3_div_0_span_13_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, ProductStandaloneComponent_ng_template_3_div_0_div_14_Template, 6, 4, "div", 20)(15, ProductStandaloneComponent_ng_template_3_div_0_div_15_Template, 5, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, ProductStandaloneComponent_ng_template_3_div_0_span_17_Template, 4, 3, "span", 23)(18, ProductStandaloneComponent_ng_template_3_div_0_span_18_Template, 4, 3, "span", 23)(19, ProductStandaloneComponent_ng_template_3_div_0_span_19_Template, 4, 3, "span", 23)(20, ProductStandaloneComponent_ng_template_3_div_0_span_20_Template, 4, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, ProductStandaloneComponent_ng_template_3_div_0_div_21_Template, 4, 3, "div", 25)(22, ProductStandaloneComponent_ng_template_3_div_0_div_22_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 27)(24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, ProductStandaloneComponent_ng_template_3_div_0_div_25_Template, 5, 3, "div", 29)(26, ProductStandaloneComponent_ng_template_3_div_0_div_26_Template, 3, 1, "div", 30)(27, ProductStandaloneComponent_ng_template_3_div_0_ng_container_27_Template, 7, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "tg-product-specifications", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, ProductStandaloneComponent_ng_template_3_div_0_ng_container_29_Template, 9, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    const product_r22 = ctx_r98.product;
    const visibilityArray_r24 = ctx_r98.visibilityArray;
    const index_r23 = ctx_r98.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isMultipleDTV);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](30, _c6, !ctx_r25.isTelenetBrand));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](32, _c7, !(ctx_r25.showChangePlan(product_r22) && product_r22.isProductActive() || ctx_r25.showManageOptions(product_r22) && product_r22.isProductActive() && !product_r22.isMultipleDTV), ctx_r25.showChangePlan(product_r22) && product_r22.isProductActive() || ctx_r25.showManageOptions(product_r22) && product_r22.isProductActive() && !product_r22.isMultipleDTV));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", "icon-" + ctx_r25.getProductIcon(product_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](35, _c8, !ctx_r25.isTelenetBrand && product_r22.productType !== "mobile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("data-cy", "labelKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", product_r22.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.handsets && product_r22.handsets.length > 0 && product_r22.handsets[0].handsetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.productType === "mobile" || product_r22.productType === "telephone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.productType === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductActivationInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductDisconnectionInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductModificationInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.isProductSuspended());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r25.showChangePlan(product_r22) && product_r22.isProductActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r25.showManageOptions(product_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction2"](37, _c9, !(ctx_r25.showChangePlan(product_r22) && product_r22.isProductActive() || ctx_r25.showManageOptions(product_r22) && product_r22.isProductActive() && !product_r22.isMultipleDTV), ctx_r25.showChangePlan(product_r22) && product_r22.isProductActive() || ctx_r25.showManageOptions(product_r22) && product_r22.isProductActive() && !product_r22.isMultipleDTV));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r25.showChangePlan(product_r22) && product_r22.isProductActive());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r25.showManageOptions(product_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r25.isTelenetBrand);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("products", ctx_r25.products)("product", product_r22)("isTelenetBrand", ctx_r25.isTelenetBrand)("showSpecs", !ctx_r25.isTelenetBrand ? visibilityArray_r24[index_r23] : false)("hasSalesScope", ctx_r25.hasSalesScope)("canManageProductHolding", ctx_r25.canManageProductHolding)("changeTariffPlanUrl", ctx_r25.changeTariffPlanUrl)("manageOptionUrl", ctx_r25.manageOptionUrl)("componentInstanceID", ctx_r25.componentInstanceID);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r25.isTelenetBrand);
  }
}
function ProductStandaloneComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, ProductStandaloneComponent_ng_template_3_div_0_Template, 30, 40, "div", 1);
  }
  if (rf & 2) {
    const product_r22 = ctx.product;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", product_r22.children.length === 0 && !product_r22.isC5Bundle() && !ctx_r2.showStreamingSection);
  }
}
class ProductStandaloneComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.AbstractBaseComponent {
  urlService;
  dataLayerService;
  pathCategorisationService;
  productOverviewService;
  dialog;
  set standAloneProducts(products) {
    if (products?.length) {
      this.products = products;
      this.isTelenetBrand = this.pathCategorisationService.getCustomerBrand()?.toUpperCase() === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.BRAND_TELENET;
      if (!this.isTelenetBrand) {
        this.splitProducts();
      }
    }
  }
  hasSalesScope = false;
  canManageProductHolding = false;
  changeTariffPlanUrl;
  manageOptionUrl;
  componentInstanceID;
  showStreamingSection = false;
  marketingPagesObject;
  changeMobileTariffUrl;
  changeDTVTariffUrl;
  changeInternetTariffUrl;
  mobileProducts = [];
  internetProducts = [];
  tvProducts = [];
  products;
  mobileProductsVisible;
  internetProductsVisible;
  tvProductsVisible;
  isTelenetBrand;
  productTypes = ['mobile', 'internet', 'dtv'];
  constructor(urlService, dataLayerService, pathCategorisationService, productOverviewService, dialog) {
    super();
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.pathCategorisationService = pathCategorisationService;
    this.productOverviewService = productOverviewService;
    this.dialog = dialog;
  }
  splitProducts() {
    this.mobileProducts = this.products.filter(product => product.productType === 'mobile');
    this.internetProducts = this.products.filter(product => product.productType === 'internet');
    this.tvProducts = this.products.filter(product => product.productType === 'dtv');
    this.mobileProductsVisible = Array(this.mobileProducts.length).fill(false);
    this.internetProductsVisible = Array(this.internetProducts.length).fill(false);
    this.tvProductsVisible = Array(this.tvProducts.length).fill(false);
  }
  getProductIcon(product) {
    return this.productOverviewService.getProductIcon(product);
  }
  showChangePlan(product) {
    return this.hasSalesScope && !product.isProductSuspended() && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  showManageOptions(product) {
    const isPrepaid = product.productInfo?.hasCategory?.(_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.PREPAID_MOBILE) || false;
    return (isPrepaid || this.canManageProductHolding) && !product.productInfo.isYupProduct && !product.isUnderMove;
  }
  manageOptions(product, e) {
    e.stopPropagation();
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${product.identifier}&flow=${_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  redirectToMarketingPage(product) {
    this.handleMarketingConfiguratorAnalytics(product);
    if (product.hasOldSocialTariffDiscount) {
      return this.redirectToMarketingPageGrandFathering(product.productType);
    } else {
      this.urlService.redirectTo(this.marketingPagesObject[product.productType]);
    }
  }
  handleMarketingConfiguratorAnalytics(product) {
    if (this.marketingPagesObject[product.productType]) {
      const eventInfoData = this.dataLayerService.createEventInfo(_constants_events_constant__WEBPACK_IMPORTED_MODULE_3__.EventsConstants.EVENT_NAME_CHANGE_PLAN_CLICK, _constants_events_constant__WEBPACK_IMPORTED_MODULE_3__.EventsConstants.EVENT_TYPE_CLICK);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
  }
  redirectToMarketingPageGrandFathering(productType) {
    this.dialog.open(_grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_5__.GrandFatheringSocialTariffNotificationComponent).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(result => {
      if (result) {
        this.urlService.redirectTo(this.marketingPagesObject[productType]);
      }
    });
  }
  changeTariffPlan(product, e) {
    let changeTariffUrl = '';
    switch (product.productType) {
      case 'mobile':
        changeTariffUrl = this.changeMobileTariffUrl;
        break;
      case 'internet':
        changeTariffUrl = this.changeInternetTariffUrl;
        break;
      case 'dtv':
        changeTariffUrl = this.changeDTVTariffUrl;
        break;
    }
    if (!changeTariffUrl) {
      changeTariffUrl = this.changeTariffPlanUrl;
    }
    const finalUrl = `${changeTariffUrl}?flow=care&item=${product.identifier}`;
    if (product.hasOldSocialTariffDiscount) {
      return this.changePlanForSocialTariff(e, finalUrl);
    } else {
      e.stopPropagation();
      this.urlService.redirectTo(finalUrl);
    }
  }
  changePlanForSocialTariff(e, redirectUrl) {
    this.dialog.open(_grand_fathering_social_tariff_notification_grand_fathering_social_tariff_notification_component__WEBPACK_IMPORTED_MODULE_5__.GrandFatheringSocialTariffNotificationComponent).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.unsubscribe$)).subscribe(result => {
      if (result) {
        e.stopPropagation();
        this.urlService.redirectTo(redirectUrl);
      }
    });
  }
  handleRedirectToMarketingPage(event, product) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_3__.EventsConstants.EVENT_KEY_ENTER) {
      this.redirectToMarketingPage(product);
    }
  }
  handleManageOptions(event, product) {
    if (event.key === _constants_events_constant__WEBPACK_IMPORTED_MODULE_3__.EventsConstants.EVENT_KEY_ENTER) {
      this.manageOptions(product, event);
    }
  }
  static ɵfac = function ProductStandaloneComponent_Factory(t) {
    return new (t || ProductStandaloneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_4__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_0__.PathCategorisationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ProductStandaloneComponent,
    selectors: [["tg-product-standalone"]],
    inputs: {
      standAloneProducts: "standAloneProducts",
      hasSalesScope: "hasSalesScope",
      canManageProductHolding: "canManageProductHolding",
      changeTariffPlanUrl: "changeTariffPlanUrl",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      showStreamingSection: "showStreamingSection",
      marketingPagesObject: "marketingPagesObject",
      changeMobileTariffUrl: "changeMobileTariffUrl",
      changeDTVTariffUrl: "changeDTVTariffUrl",
      changeInternetTariffUrl: "changeInternetTariffUrl"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 2,
    consts: [[1, "product-overview"], [4, "ngIf"], ["standalone", ""], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mb--xl", 4, "ngIf"], [1, "mb--xl"], [1, "mb-15", "mt-0"], [1, "mb-15", 3, "ngClass"], [1, "mb-15"], ["class", "notification notification--info mb-20", 4, "ngIf"], [1, "content-section", "mb-20"], [1, "content-section__details", 3, "ngClass", "click"], [1, "row", "display--flex", "align-items--center"], [1, "col-xs-11", "display--flex", "align-items--start", 3, "ngClass"], [1, "product-overview__content-section__image", "display--flex", "align-items--center", "justify-content--center"], [1, "icon", "icon-md", "icon-no-size-override", "text-weight--xxs", 3, "ngClass"], [1, "product-overview__heading", "display--flex--md", "align-items--center"], [1, "ml--m", 3, "ngClass"], [1, "text-font-family--t7", "text--xxm"], ["class", "display--flex--md align-items--center pt--xxs product-overview__hide-base", 4, "ngIf"], ["class", "display--flex--md align-items--center pt--xxs product-overview__hide-telenet", 4, "ngIf"], [1, "pl--m", "pt--xxs", "pt--n--md"], ["class", "status-indicator status-indicator--warning mb--m mb--n--md", 4, "ngIf"], ["class", "status-indicator status-indicator--negative mb--m mb--n--md", 4, "ngIf"], ["class", "hide-from-md pt-5 pl--m product-overview__hide-base", 4, "ngIf"], ["class", "hide-from-md pt-5 pl--m", 4, "ngIf"], [1, "col-xs-1", "text-align--right", 3, "ngClass"], [1, "display--flex--md", "align-items--center", "justify-content--end--md"], ["class", "product-overview__hide-base text-align--right", 4, "ngIf"], ["class", "product-overview__hide-base", 4, "ngIf"], [3, "products", "product", "isTelenetBrand", "showSpecs", "hasSalesScope", "canManageProductHolding", "changeTariffPlanUrl", "manageOptionUrl", "componentInstanceID"], [1, "notification", "notification--info", "mb-20"], [1, "icon", "icon-information-shape", "info"], [1, "display--flex--md", "align-items--center", "pt--xxs", "product-overview__hide-base"], ["class", "mr--xxs--md mb--n--md mb--xxs mt--xxs", 4, "ngIf"], [1, "text--s"], [1, "pr--xxxs"], [1, "mr--xxs--md", "mb--n--md", "mb--xxs", "mt--xxs"], [1, "status-indicator", "status-indicator--positive"], [1, "display--flex--md", "align-items--center", "pt--xxs", "product-overview__hide-telenet"], [1, "status-indicator", "status-indicator--warning", "mb--m", "mb--n--md"], [1, "status-indicator", "status-indicator--negative", "mb--m", "mb--n--md"], [1, "hide-from-md", "pt-5", "pl--m", "product-overview__hide-base"], ["tabindex", "0", 1, "font--body-regular", "link", "link--subtle", 3, "keydown", "click"], [1, "hide-from-md", "pt-5", "pl--m"], ["tabindex", "0", "class", "font--body-regular product-overview__hide-base link link--subtle", 3, "keydown", "click", 4, "ngIf"], ["tabindex", "0", 1, "font--body-regular", "product-overview__hide-base", "link", "link--subtle", 3, "keydown", "click"], [1, "product-overview__hide-base", "text-align--right"], [1, "hide-until-md"], [1, "product-overview__hide-base"], ["tabindex", "0", "class", "font--body-regular ml--xxxl--md link link--subtle", 3, "keydown", "click", 4, "ngIf"], ["tabindex", "0", 1, "font--body-regular", "ml--xxxl--md", "link", "link--subtle", 3, "keydown", "click"], ["class", "pt--n--md pt--s", 3, "ngClass", 4, "ngIf"], ["class", "ml--m--md icon icon-md icon-chevron-down product-overview__icon-section", 4, "ngIf"], ["class", "ml--m--md icon icon-md icon-chevron-up product-overview__icon-section", 4, "ngIf"], [1, "pt--n--md", "pt--s", 3, "ngClass"], ["class", "text-flow text-flow--body color-deep-aqua text-flow--hyperlink text-flow--label cursor--pointer text-decoration--underline", 3, "click", 4, "ngIf"], [1, "text-flow", "text-flow--body", "color-deep-aqua", "text-flow--hyperlink", "text-flow--label", "cursor--pointer", "text-decoration--underline", 3, "click"], [1, "text-flow", "text-flow--body", "color-deep-aqua", "text-flow--hyperlink", "text-flow--label", "cursor--pointer", 3, "click"], [1, "ml--m--md", "icon", "icon-md", "icon-chevron-down", "product-overview__icon-section"], [1, "ml--m--md", "icon", "icon-md", "icon-chevron-up", "product-overview__icon-section"], [3, "isTelenetBrand", "product", 4, "ngIf"], [1, "display--flex", "hide-from-md", "pt--m"], [1, "", 3, "ngClass"], ["class", "text-flow text-flow--body color-deep-aqua text-flow--hyperlink text-flow--label cursor--pointer", 3, "click", 4, "ngIf"], [3, "isTelenetBrand", "product"]],
    template: function ProductStandaloneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_1_Template, 2, 1, "ng-container", 1)(2, ProductStandaloneComponent_ng_container_2_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, ProductStandaloneComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isTelenetBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isTelenetBrand);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_12__.ProductSpecificationsComponent, _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_11__.ProductIncludedOptionsComponent, _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_10__.ProductExtraOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_8__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 20824:
/*!********************************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/product-tip-contracts/product-tip-contracts.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTipContractsComponent: () => (/* binding */ ProductTipContractsComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product-overview.service */ 66082);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









function ProductTipContractsComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductTipContractsComponent_div_0_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const tipContract_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.addProductViewEventToDataLayer(tipContract_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "ng.product-overview.lbl.more-info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "open-mobile-dropdown");
  }
}
function ProductTipContractsComponent_div_0_div_22_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipContract_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "tip-mrc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tipContract_r1.tipMRC.vatExcl, " ");
  }
}
function ProductTipContractsComponent_div_0_div_22_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipContract_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "tip-nrc");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tipContract_r1.tipNRC.vatExcl, " ");
  }
}
function ProductTipContractsComponent_div_0_div_22_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipContract_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "tip-usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tipContract_r1.tipUsage.vatExcl, " ");
  }
}
function ProductTipContractsComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18)(6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 20)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ProductTipContractsComponent_div_0_div_22_span_13_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 18)(15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 20)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ProductTipContractsComponent_div_0_div_22_span_22_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 18)(24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 20)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ProductTipContractsComponent_div_0_div_22_span_31_Template, 2, 2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductTipContractsComponent_div_0_div_22_Template_div_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const tipContract_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.addProductViewEventToDataLayer(tipContract_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tipContract_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 12, "ng.product-overview.text.specifications"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 14, "ng.product-overview.lbl.tipmrc"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 16, "ng.product-overview.lbl.tip-currency"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tipContract_r1.tipMRC);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 18, "ng.product-overview.lbl.tipnrc"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 20, "ng.product-overview.lbl.tip-currency"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tipContract_r1.tipNRC);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 22, "ng.product-overview.lbl.tipusage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 24, "ng.product-overview.lbl.tip-currency"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tipContract_r1.tipUsage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 26, "ng.product-overview.lbl.less-info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "close-mobile-dropdown");
  }
}
function ProductTipContractsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductTipContractsComponent_div_0_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const tipContract_r1 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.addProductViewEventToDataLayer(tipContract_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 4)(13, "div", 5)(14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ProductTipContractsComponent_div_0_div_21_Template, 6, 4, "div", 11)(22, ProductTipContractsComponent_div_0_div_22_Template, 38, 28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipContract_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", tipContract_r1.showDetails ? "icon-chevron-up" : "icon-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "plan-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](tipContract_r1.planName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 9, "ng.product-overview.lbl.product"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "mobile-plan-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tipContract_r1.planName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !tipContract_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", tipContract_r1.showDetails);
  }
}
class ProductTipContractsComponent {
  dataLayerService;
  productOverviewService;
  tipContracts;
  componentInstanceID;
  constructor(dataLayerService, productOverviewService) {
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
  }
  addProductViewEventToDataLayer(tipContract) {
    tipContract.showDetails = !tipContract.showDetails;
    if (tipContract.showDetails) {
      const eventInfoData = this.dataLayerService.createEventInfo(_constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_NAME_TARIFF_PLAN, _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_TYPE_VIEW_PRODUCT_DETAILS);
      const attributes = {};
      attributes[_constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_ATTRIBUTE_PRODUCT] = this.getViewedProducts(tipContract.productInfo);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID, attributes);
    }
  }
  getViewedProducts(productInfo) {
    if (productInfo) {
      const product = {
        productInfo: {
          productType: productInfo.productType,
          productID: productInfo.externalProductCode
        }
      };
      return [product];
    }
    return [];
  }
  static ɵfac = function ProductTipContractsComponent_Factory(t) {
    return new (t || ProductTipContractsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProductTipContractsComponent,
    selectors: [["tg-product-tip-contracts"]],
    inputs: {
      tipContracts: "tipContracts",
      componentInstanceID: "componentInstanceID"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "product-overview__section", 4, "ngFor", "ngForOf"], [1, "product-overview__section"], [1, "hidden-mobile"], [1, "product-overview__section__info", "cursor--pointer", 3, "click"], [1, "product-overview__section__info__description"], [1, "description", "description--first-field"], [3, "ngClass"], [1, "plan-name"], [1, "hidden-desktop"], [1, "product-overview__section__info"], [1, "plan-title"], ["class", "product-overview__section__more-info", 3, "click", 4, "ngIf"], ["class", "product-overview__section--container", 4, "ngIf"], [1, "product-overview__section__more-info", 3, "click"], [1, "icon-chevron-down"], [1, "product-overview__section--container"], [1, "product-overview__section__details"], [1, "details__heading"], [1, "details__data"], [1, "data--key"], [1, "data--value"], [4, "ngIf"], ["data-translate", "product-overview.lbl.tipusage", 1, "data--key"], [1, "icon-chevron-up"]],
    template: function ProductTipContractsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProductTipContractsComponent_div_0_Template, 23, 11, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tipContracts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 66082:
/*!************************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/services/product-overview.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewService: () => (/* binding */ ProductOverviewService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events.constant */ 27044);
/* harmony import */ var _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product-overview.constant */ 66191);
/* harmony import */ var _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/product-icon.constant */ 73660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class ProductOverviewService {
  dataLayerService;
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  getClickEventInfoData(product) {
    let eventName = _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_NAME_MANAGE_OPTION_CLICK;
    if ((product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STATUS_NOT_ACTIVE || product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTED_STATUS) && !product.upgradePossibleTo || product.status === _constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVE_STATUS && product.upgradePossibleTo) {
      eventName = _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_NAME_SECURITY_OPTION_CLICK;
    }
    return this.dataLayerService.createEventInfo(eventName, _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_TYPE_CLICK);
  }
  addEventToDataLayer(eventInfoData, componentInstanceID, attributes) {
    const category = this.dataLayerService.getCategory(componentInstanceID) || this.dataLayerService.createCategory('care', 'product-overview');
    eventInfoData.setEventStatus(_constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_STATUS_SUCCESS);
    this.dataLayerService.sendEvent({
      eventInfo: eventInfoData,
      attributes: attributes || {},
      category
    });
  }
  getProductIcon(product) {
    if (product.productInfo.subCategory?.name === _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.SUBCATEGORY_SECURITY) {
      return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.SECURITY_ICON;
    }
    if (product.productInfo.externalProductCode === _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.INTERNATIONAL_CALLING_EPC) {
      return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.INTERNATIONAL_CALLING_ICON;
    }
    if (product.productInfo.externalProductCode === _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.KONG_EPC || product.productInfo.externalProductCode === _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.KONG_UNLIMITED_EPC) {
      return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.KONG_EPC_ICON;
    }
    if (product.productInfo.externalProductCode === _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.DATA_SIM_EPC) {
      return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.DATA_SIM_EPC_ICON;
    }
    if (product.productInfo.externalProductCode?.startsWith(_constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.STREAMING_PRODUCT_PREFIX)) {
      return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.STREAMING_ICON;
    }
    if (product.productInfo.isFPBProduct) {
      return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.FIXED_TELEPHONY_ICON;
    }
    switch (product.productType) {
      case _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.PRODUCT_TYPE_INTERNET:
        return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.INTERNET_ICON;
      case _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.PRODUCT_TYPE_MOBILE:
        return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.MOBILE_ICON;
      case _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.PRODUCT_TYPE_DTV:
        return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.DTV_ICON;
      case _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.PRODUCT_TYPE_FIXED_TELEPHONE:
        return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.FIXED_TELEPHONY_ICON;
      case _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.PRODUCT_TYPE_PHONE2GO:
        return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.PHONE2GO_TELEPHONE_ICON;
      default:
        return _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__.ProductIconConstants.MOBILE_ICON;
    }
  }
  static ɵfac = function ProductOverviewService_Factory(t) {
    return new (t || ProductOverviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductOverviewService,
    factory: ProductOverviewService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1819:
/*!*****************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/services/promotion.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromotionService: () => (/* binding */ PromotionService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mappers_tip_contracts_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mappers/tip-contracts.mapper */ 32526);
/* harmony import */ var _constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/promotion-service.constants */ 70141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








class PromotionService {
  ocapiService;
  urlService;
  tipContractsMapper;
  constructor(ocapiService, urlService, tipContractsMapper) {
    this.ocapiService = ocapiService;
    this.urlService = urlService;
    this.tipContractsMapper = tipContractsMapper;
  }
  getTIPContracts(messageGroupName, status) {
    let endpoint = this.getServiceURI(_constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_3__.PromotionServiceConstants.CONTRACTS, _constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_3__.PromotionServiceConstants.CONTEXT_TIP, _constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_3__.PromotionServiceConstants.API_VERSION_V1);
    if (status) {
      const urlParam = new Map();
      urlParam.set('status', status);
      endpoint = this.urlService.buildUrlWithParams(endpoint, urlParam);
    }
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroupName, endpoint, this.tipContractsMapper));
  }
  getServiceURI(endpoint, context, version) {
    return _constants_promotion_service_constants__WEBPACK_IMPORTED_MODULE_3__.PromotionServiceConstants.PROMOTION_SERVICE_PREFIX.concat(version).concat(context).concat(endpoint);
  }
  static ɵfac = function PromotionService_Factory(t) {
    return new (t || PromotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_mappers_tip_contracts_mapper__WEBPACK_IMPORTED_MODULE_2__.TIPContractsMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PromotionService,
    factory: PromotionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 12146:
/*!*********************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/store/product-overview.actions.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setConfig: () => (/* binding */ setConfig),
/* harmony export */   setFreePhoneBusinessProducts: () => (/* binding */ setFreePhoneBusinessProducts),
/* harmony export */   setMarketingPages: () => (/* binding */ setMarketingPages),
/* harmony export */   setScopes: () => (/* binding */ setScopes),
/* harmony export */   setSelectedAccountProducts: () => (/* binding */ setSelectedAccountProducts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setSelectedAccountProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setSelectedAccountProducts`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setFreePhoneBusinessProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setFreePhoneBusinessProducts`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setConfig = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setConfig`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setScopes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setScopes`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setMarketingPages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setMarketingPages`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 70452:
/*!********************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/store/product-overview.facade.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewFacade: () => (/* binding */ ProductOverviewFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_overview_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.actions */ 12146);
/* harmony import */ var _product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-overview.selectors */ 55153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductOverviewFacade {
  store;
  get selectedAccountProducts$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSelectedAccountProducts);
  }
  get freePhoneBusinessProducts$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectFreePhoneBusinessProducts);
  }
  get config$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectConfig);
  }
  get scopes$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectScopes);
  }
  get marketingPages$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectMarketingPages);
  }
  setSelectedAccountProducts(products) {
    this.store.dispatch((0,_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setSelectedAccountProducts)({
      products
    }));
  }
  setFreePhoneBusinessProducts(products) {
    this.store.dispatch((0,_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setFreePhoneBusinessProducts)({
      products
    }));
  }
  setConfig(config) {
    this.store.dispatch((0,_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setConfig)({
      config
    }));
  }
  setScopes(scopes) {
    this.store.dispatch((0,_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setScopes)({
      scopes
    }));
  }
  setMarketingPages(pages) {
    this.store.dispatch((0,_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setMarketingPages)({
      pages
    }));
  }
  constructor(store) {
    this.store = store;
  }
  static ɵfac = function ProductOverviewFacade_Factory(t) {
    return new (t || ProductOverviewFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.Store));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProductOverviewFacade,
    factory: ProductOverviewFacade.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 89346:
/*!*********************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/store/product-overview.reducer.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_OVERVIEW_FEATURE_KEY: () => (/* binding */ PRODUCT_OVERVIEW_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   productOverviewFeature: () => (/* binding */ productOverviewFeature),
/* harmony export */   productOverviewReducer: () => (/* binding */ productOverviewReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _product_overview_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.actions */ 12146);



const PRODUCT_OVERVIEW_FEATURE_KEY = 'product-overview';
const initialState = {
  selectedAccountProducts: [],
  freePhoneBusinessProducts: [],
  config: {
    changeTariffPlanUrl: '',
    manageOptionUrl: '',
    componentInstanceID: '',
    addSubscriptionUrl: '',
    discoverSmartPhoneUrl: '',
    freePhoneBusinessUrl: '',
    isAccountSelectorConsumer: false,
    planUpgradeUrl: '',
    intentRequired: false
  },
  scopes: {
    isPrepaidLogin: false,
    hasSalesScope: false,
    canManageProductHolding: false
  },
  marketingPages: {
    dtv: '',
    fixed: '',
    internet: '',
    mobile: ''
  }
};
const productOverviewReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setSelectedAccountProducts, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.selectedAccountProducts = action.products;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setFreePhoneBusinessProducts, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.freePhoneBusinessProducts = action.products;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setConfig, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.config = action.config;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setScopes, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.scopes = action.scopes;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setMarketingPages, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.marketingPages = action.pages;
  });
}));
const productOverviewFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: PRODUCT_OVERVIEW_FEATURE_KEY,
  reducer: productOverviewReducer
});

/***/ }),

/***/ 55153:
/*!***********************************************************************************************!*\
  !*** ./apps/account/product-mfe/src/app/product-overview/store/product-overview.selectors.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectConfig: () => (/* binding */ selectConfig),
/* harmony export */   selectFreePhoneBusinessProducts: () => (/* binding */ selectFreePhoneBusinessProducts),
/* harmony export */   selectMarketingPages: () => (/* binding */ selectMarketingPages),
/* harmony export */   selectProductOverview: () => (/* binding */ selectProductOverview),
/* harmony export */   selectScopes: () => (/* binding */ selectScopes),
/* harmony export */   selectSelectedAccountProducts: () => (/* binding */ selectSelectedAccountProducts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 25288);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_overview_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.reducer */ 89346);


const selectProductOverview = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_product_overview_reducer__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_OVERVIEW_FEATURE_KEY);
const selectSelectedAccountProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.selectedAccountProducts);
const selectFreePhoneBusinessProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.freePhoneBusinessProducts);
const selectConfig = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.config);
const selectScopes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.scopes);
const selectMarketingPages = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.marketingPages);

/***/ }),

/***/ 75825:
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
// All error codes, starting by 0:
function (plugin) {
  return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
}, function (thing) {
  return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
}, "This object has been frozen and should not be mutated", function (data) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
}, "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", "Immer forbids circular references", "The first or second argument to `produce` must be a function", "The third argument to `produce` must be a function or undefined", "First argument to `createDraft` must be a plain object, an array, or an immerable object", "First argument to `finishDraft` must be a draft returned by `createDraft`", function (thing) {
  return `'current' expects a draft, got: ${thing}`;
}, "Object.defineProperty() cannot be used on an Immer draft", "Object.setPrototypeOf() cannot be used on an Immer draft", "Immer only supports deleting array indices", "Immer only supports setting array indices and the 'length' property", function (thing) {
  return `'original' expects a draft, got: ${thing}`;
}
// Note: if more errors are added, the errorOffset in Patches.ts should be increased
// See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value) return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object) return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value)) die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Object.entries(obj).forEach(([key, value]) => {
      iter(key, value, obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */) thing.set(propOrOldValue, value);else if (t === 3 /* Set */) {
    thing.add(value);
  } else thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base)) return Array.prototype.slice.call(base);
  if (!strict && isPlainObject(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */Object.create(null);
      return Object.assign(obj, base);
    }
    return {
      ...base
    };
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set) descriptors[key] = {
      configurable: true,
      writable: true,
      // could live with !!desc.set as well here...
      enumerable: desc.enumerable,
      value: base[key]
    };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep) each(obj, (_key, value) => freeze(value, true), true);
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */) state.revoke_();else state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_) maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path), true
    // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  }
  if (state.scope_ !== rootScope) return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(resultEach, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject) die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ &&
    // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if (!parentState || !parentState.scope_.parent_) maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,

    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const {
    revoke,
    proxy
  } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE) return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && (
    // special case: handle new props with value 'undefined'
    value !== void 0 || prop in state.copy_) ||
    // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc) return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function (state, prop) {
  if ( true && isNaN(parseInt(prop))) die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function (state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop))) die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value :
  // This is a very special case, if the prop is a getter defined by the
  // prototype, we should invoke it with the draft as context!
  desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source)) return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, draft => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function") die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError) revokeScope(scope);else leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0) result = base;
        if (result === NOTHING) result = void 0;
        if (this.autoFreeze_) freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, draft => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base)) die(8);
    if (isDraft(base)) base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_) die(9);
    const {
      scope_: scope
    } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(base, draft => applyPatchesImpl(draft, patches));
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value)) die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_) return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push('Sets cannot have "replace" patches.', function (op) {
      return "Unsupported patch operation: " + op;
    }, function (path) {
      return "Cannot apply patch, path doesn't resolve: " + path;
    }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(state, basePath, patches, inversePatches);
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      assigned_
    } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const {
      base_,
      copy_
    } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE) return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? {
        op,
        path
      } : {
        op,
        path,
        value
      });
      inversePatches.push(op === ADD ? {
        op: REMOVE,
        path
      } : op === REMOVE ? {
        op: ADD,
        path,
        value: clonePatchValueIfNeeded(origValue)
      } : {
        op: REPLACE,
        path,
        value: clonePatchValueIfNeeded(origValue)
      });
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      copy_
    } = state;
    let i = 0;
    base_.forEach(value => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach(value => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach(patch => {
      const {
        path,
        op
      } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor")) die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype") die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object") die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj)) return obj;
    if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
    if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)]));
    if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj) cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */new Map();
        each(state.base_, key => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value)) return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : ( /* istanbul ignore next */
      false));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */new Set();
      state.base_.forEach(value => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_) die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", {
    proxyMap_,
    proxySet_
  });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(immer);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}


/***/ }),

/***/ 17558:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataView);

/***/ }),

/***/ 73875:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ 64014);
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ 32208);
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ 16546);
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ 32502);
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ 36788);






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hash);

/***/ }),

/***/ 32938:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ 99537);
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ 15126);
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ 23936);
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ 69420);
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ 88886);






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListCache);

/***/ }),

/***/ 525:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ 80795:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ 43771);
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ 99809);
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ 29080);
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ 89927);
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ 58096);






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapCache);

/***/ }),

/***/ 89433:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 23684:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Set);

/***/ }),

/***/ 53536:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ 6677);
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ 55311);
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ 95121);
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ 90669);
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ 79746);







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);

/***/ }),

/***/ 82134:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);

/***/ }),

/***/ 49764:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uint8Array);

/***/ }),

/***/ 12680:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ 16396);



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeakMap);

/***/ }),

/***/ 47528:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayEach);

/***/ }),

/***/ 74423:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayFilter);

/***/ }),

/***/ 54937:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseTimes.js */ 26513);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_isIndex.js */ 36570);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
    isArg = !isArr && (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
    isBuff = !isArr && !isArg && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
    isType = !isArr && !isArg && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? (0,_baseTimes_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value.length, String) : [],
    length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    (0,_isIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"])(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayLikeKeys);

/***/ }),

/***/ 11191:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayPush);

/***/ }),

/***/ 68676:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) || value === undefined && !(key in object)) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);

/***/ }),

/***/ 23342:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assocIndexOf);

/***/ }),

/***/ 83793:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 87480);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 31192);



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssign);

/***/ }),

/***/ 22631:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 87480);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 22229);



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignIn);

/***/ }),

/***/ 72681:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ 11307);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);

/***/ }),

/***/ 68265:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_arrayEach.js */ 47528);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_assignValue.js */ 68676);
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_baseAssign.js */ 83793);
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_baseAssignIn.js */ 22631);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_cloneBuffer.js */ 21691);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_copyArray.js */ 54196);
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_copySymbols.js */ 73662);
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ 37085);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_getAllKeys.js */ 44857);
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_getAllKeysIn.js */ 9740);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_initCloneArray.js */ 97392);
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneByTag.js */ 20586);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_initCloneObject.js */ 71372);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isMap.js */ 41078);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./isSet.js */ 29584);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keys.js */ 31192);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./keysIn.js */ 22229);























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (isArr) {
    result = (0,_initCloneArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
    if (!isDeep) {
      return (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value, result);
    }
  } else {
    var tag = (0,_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value),
      isFunc = tag == funcTag || tag == genTag;
    if ((0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value);
      if (!isDeep) {
        return isFlat ? (0,_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, (0,_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_9__["default"])(result, value)) : (0,_copySymbols_js__WEBPACK_IMPORTED_MODULE_10__["default"])(value, (0,_baseAssign_js__WEBPACK_IMPORTED_MODULE_11__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0,_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_13__["default"]());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if ((0,_isSet_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if ((0,_isMap_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_16__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_17__["default"] : isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_18__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_19__["default"];
  var props = isArr ? undefined : keysFunc(value);
  (0,_arrayEach_js__WEBPACK_IMPORTED_MODULE_20__["default"])(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_21__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseClone);

/***/ }),

/***/ 31088:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);

/***/ }),

/***/ 70341:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, symbolsFunc(object));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetAllKeys);

/***/ }),

/***/ 79304:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ 11650);
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ 5354);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseGetTag);

/***/ }),

/***/ 34063:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == argsTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsArguments);

/***/ }),

/***/ 56934:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsMap.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == mapTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsMap);

/***/ }),

/***/ 52020:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ 38426);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ 51540);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNative);

/***/ }),

/***/ 91469:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getTag.js */ 8020);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_getTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) == setTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsSet);

/***/ }),

/***/ 80970:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ 74080);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsTypedArray);

/***/ }),

/***/ 22093:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ 93058);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeys);

/***/ }),

/***/ 2171:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ 22879);




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);

/***/ }),

/***/ 26513:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseTimes);

/***/ }),

/***/ 87523:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUnary);

/***/ }),

/***/ 82583:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ 49764);


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);

/***/ }),

/***/ 21691:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);

/***/ }),

/***/ 16892:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 82583);


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDataView);

/***/ }),

/***/ 10762:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneRegExp);

/***/ }),

/***/ 6203:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
  symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneSymbol);

/***/ }),

/***/ 7721:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 82583);


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);

/***/ }),

/***/ 54196:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);

/***/ }),

/***/ 87480:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ 68676);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);

/***/ }),

/***/ 73662:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 87480);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ 9294);



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbols);

/***/ }),

/***/ 37085:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 87480);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 69816);



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, (0,_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copySymbolsIn);

/***/ }),

/***/ 1408:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreJsData);

/***/ }),

/***/ 11307:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);

var defineProperty = function () {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);

/***/ }),

/***/ 60800:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);

/***/ }),

/***/ 44857:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 70341);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 9294);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ 31192);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeys);

/***/ }),

/***/ 9740:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ 70341);
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbolsIn.js */ 69816);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 22229);




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllKeysIn);

/***/ }),

/***/ 54564:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ 64405);


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0,_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMapData);

/***/ }),

/***/ 72483:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsNative.js */ 52020);
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getValue.js */ 91680);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0,_getValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key);
  return (0,_baseIsNative_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNative);

/***/ }),

/***/ 41640:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);

/***/ }),

/***/ 11650:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawTag);

/***/ }),

/***/ 9294:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 74423);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 71509);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0,_arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbols);

/***/ }),

/***/ 69816:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_getPrototype.js */ 41640);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ 9294);
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stubArray.js */ 71509);





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (object) {
  var result = [];
  while (object) {
    (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, (0,_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSymbolsIn);

/***/ }),

/***/ 8020:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_DataView.js */ 17558);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Promise.js */ 89433);
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Set.js */ 23684);
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_WeakMap.js */ 12680);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_toSource.js */ 51540);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
  mapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
  promiseCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
  setCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
  weakMapCtorString = (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_1__["default"](new ArrayBuffer(1))) != dataViewTag || _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_2__["default"]()) != mapTag || _Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_3__["default"].resolve()) != promiseTag || _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_4__["default"]()) != setTag || _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_5__["default"]()) != weakMapTag) {
  getTag = function (value) {
    var result = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value),
      Ctor = result == objectTag ? value.constructor : undefined,
      ctorString = Ctor ? (0,_toSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ 91680:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValue);

/***/ }),

/***/ 64014:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (0,_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashClear);

/***/ }),

/***/ 32208:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashDelete);

/***/ }),

/***/ 16546:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashGet);

/***/ }),

/***/ 32502:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashHas);

/***/ }),

/***/ 36788:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ 9140);


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined ? HASH_UNDEFINED : value;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashSet);

/***/ }),

/***/ 97392:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneArray);

/***/ }),

/***/ 20586:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 82583);
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ 16892);
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneRegExp.js */ 10762);
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneSymbol.js */ 6203);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneTypedArray.js */ 7721);






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    case boolTag:
    case dateTag:
      return new Ctor(+object);
    case dataViewTag:
      return (0,_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
      return (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, isDeep);
    case mapTag:
      return new Ctor();
    case numberTag:
    case stringTag:
      return new Ctor(object);
    case regexpTag:
      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
    case setTag:
      return new Ctor();
    case symbolTag:
      return (0,_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneByTag);

/***/ }),

/***/ 71372:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ 31088);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ 41640);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) : {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);

/***/ }),

/***/ 36570:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);

/***/ }),

/***/ 64405:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isKeyable);

/***/ }),

/***/ 38426:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ 1408);


/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMasked);

/***/ }),

/***/ 54036:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPrototype);

/***/ }),

/***/ 99537:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheClear);

/***/ }),

/***/ 15126:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheDelete);

/***/ }),

/***/ 23936:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  return index < 0 ? undefined : data[index][1];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheGet);

/***/ }),

/***/ 69420:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheHas);

/***/ }),

/***/ 88886:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ 23342);


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = (0,_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listCacheSet);

/***/ }),

/***/ 43771:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ 73875);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ 525);




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheClear);

/***/ }),

/***/ 99809:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheDelete);

/***/ }),

/***/ 29080:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheGet);

/***/ }),

/***/ 89927:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheHas);

/***/ }),

/***/ 58096:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ 54564);


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0,_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
    size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mapCacheSet);

/***/ }),

/***/ 9140:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ 72483);


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeCreate);

/***/ }),

/***/ 93058:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeys);

/***/ }),

/***/ 22879:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);

/***/ }),

/***/ 92596:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;
    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodeUtil);

/***/ }),

/***/ 5354:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectToString);

/***/ }),

/***/ 84119:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overArg);

/***/ }),

/***/ 16396:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ 60800);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);

/***/ }),

/***/ 6677:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.size = 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackClear);

/***/ }),

/***/ 55311:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);
  this.size = data.size;
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackDelete);

/***/ }),

/***/ 95121:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackGet);

/***/ }),

/***/ 90669:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackHas);

/***/ }),

/***/ 79746:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ 32938);
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ 525);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ 80795);




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stackSet);

/***/ }),

/***/ 51540:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);

/***/ }),

/***/ 48717:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/cloneDeep.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ 68265);


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return (0,_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneDeep);

/***/ }),

/***/ 28325:
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);

/***/ }),

/***/ 77018:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ 34063);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0,_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  return arguments;
}()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function (value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArguments);

/***/ }),

/***/ 66328:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);

/***/ }),

/***/ 64070:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isLength.js */ 74080);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLike);

/***/ }),

/***/ 92467:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ 68534);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBuffer);

/***/ }),

/***/ 93084:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);

/***/ }),

/***/ 74080:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLength);

/***/ }),

/***/ 41078:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isMap.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsMap.js */ 56934);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isMap);

/***/ }),

/***/ 32176:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);

/***/ }),

/***/ 333:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);

/***/ }),

/***/ 29584:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isSet.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsSet.js */ 91469);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSet);

/***/ }),

/***/ 54752:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ 80970);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nodeUtil.js */ 92596);




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTypedArray);

/***/ }),

/***/ 31192:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 54937);
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeys.js */ 22093);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) : (0,_baseKeys_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);

/***/ }),

/***/ 22229:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 54937);
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ 2171);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);

/***/ }),

/***/ 71509:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubArray);

/***/ }),

/***/ 68534:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stubFalse);

/***/ })

}])
//# sourceMappingURL=apps_account_product-mfe_src_app_product-overview_product-overview_component_ts.js.map