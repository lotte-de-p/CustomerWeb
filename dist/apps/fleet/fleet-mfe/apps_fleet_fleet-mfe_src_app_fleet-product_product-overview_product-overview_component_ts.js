(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["apps_fleet_fleet-mfe_src_app_fleet-product_product-overview_product-overview_component_ts"],{

/***/ 76295:
/*!**************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/constants/events.constant.ts ***!
  \**************************************************************************************************/
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
}

/***/ }),

/***/ 86399:
/*!********************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/constants/product-icon.constant.ts ***!
  \********************************************************************************************************/
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

/***/ 45809:
/*!***********************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/mappers/product.mapper.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductMapper: () => (/* binding */ ProductMapper)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fleet-user/product/shared/models/product.model */ 32689);
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/common/constants/product-overview.constant */ 42351);
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
      if (rawProduct.productType === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV && rawProduct.children?.length === 1) {
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
    const product = new _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
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
    product.simCardType = rawProduct.simCardType;
    product.simCardNumber = rawProduct.simCardNumber;
    product.pukCode = rawProduct.pukCode;
    product.splitBillProfileType = rawProduct.splitBillProfile?.type;
    product.hasExtraOptions = product.options.some(option => !option.isIncludedOption);
    product.hasIncludedOptions = product.options.some(option => option.isIncludedOption);
    product.children = this.createChildren(rawProduct);
    if (rawProduct.upgradePossibleTo) {
      product.upgradePossibleTo = rawProduct.upgradePossibleTo;
    }
    if (rawProduct.productType === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.BUNDLE && rawProduct.children.filter(child => child.productType === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV)?.length > 1) {
      product.isMultipleDTV = true;
    }
    return product;
  }
  getOptions(rawOptions) {
    let options = [];
    rawOptions?.forEach(rawOption => {
      const productInfo = this.createProductInfo(rawOption.rawOmapi);
      const option = {
        label: rawOption.label,
        productInfo: productInfo,
        status: rawOption.status,
        price: this.createPrice(rawOption.price),
        isIncludedOption: rawOption.isIncludedOption,
        isFree: rawOption.isFree,
        activeOptions: rawOption.activeOptions,
        productType: rawOption.productType,
        upgradedFrom: '',
        description: rawOption.label,
        shortDescription: productInfo?.shortDescription?.localizedContent?.name,
        productId: productInfo?.productId,
        category: productInfo?.subCategory?.localizedName,
        name: productInfo?.name,
        volume: productInfo?.services?.length > 0 ? this.mapVolume(productInfo.services[0]) : null
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
  mapVolume(service) {
    if (service.specifications[0]?.unit) {
      return service.specifications[0]?.value + ' ' + service.specifications[0].unit;
    }
    return service.specifications[0]?.value;
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
      },
      taxExclPrices: {
        currency: rawPrices?.taxExclPrices?.currency,
        recurrentDiscounted: rawPrices?.taxExclPrices?.recurrentDiscounted,
        recurrentTotal: rawPrices?.taxExclPrices?.recurrentTotal,
        recurrentDiscount: rawPrices?.taxExclPrices?.recurrentDiscount
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
    const bundleProduct = new _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_1__.Product();
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
          if (child.dataLimit && child.dataLimit?.toUpperCase() !== _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.UNLIMITED) {
            bundleProduct.limitedLines?.push(child.identifier);
          } else {
            bundleProduct.unlimitedLines?.push(child.identifier);
          }
        }
      });
    }
    if (rawProduct.productType === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.BUNDLE && bundleProduct.productType === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV && rawProduct.children.filter(child => child.productType === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DTV)?.length > 1) {
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

/***/ 4825:
/*!**********************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/mappers/profile-details-by-identity-id.mapper.ts ***!
  \**********************************************************************************************************************/
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

/***/ 50844:
/*!******************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-notifications/product-notifications.component.ts ***!
  \******************************************************************************************************************************/
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "suspendedPlanNotification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.product-overview.lbl.suspended-plan"), " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-cy", "moveNotification");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, "ng.product-overview.lbl.product-is-under-move"), " ");
  }
}
class ProductNotificationsComponent {
  showSuspendedPlanNotificationMessage;
  showMoveNotificationMessage;
  static ɵfac = function ProductNotificationsComponent_Factory(t) {
    return new (t || ProductNotificationsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProductNotificationsComponent,
    selectors: [["tg-product-notifications"]],
    inputs: {
      showSuspendedPlanNotificationMessage: "showSuspendedPlanNotificationMessage",
      showMoveNotificationMessage: "showMoveNotificationMessage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [["class", "notification notification--info col-md-12 col-sm-12 m--auto mt--l", 4, "ngIf"], [1, "notification", "notification--info", "col-md-12", "col-sm-12", "m--auto", "mt--l"], [1, "icon", "icon-information-shape", "info"]],
    template: function ProductNotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductNotificationsComponent_div_0_Template, 5, 4, "div", 0)(1, ProductNotificationsComponent_div_1_Template, 5, 4, "div", 0);
      }
      if (rf & 2) {
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

/***/ 84572:
/*!*****************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-overview-ngrx.module.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewNgRxModule: () => (/* binding */ ProductOverviewNgRxModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ 57818);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_product_overview_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/product-overview.reducer */ 77669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






class ProductOverviewNgRxModule {
  static ɵfac = function ProductOverviewNgRxModule_Factory(t) {
    return new (t || ProductOverviewNgRxModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ProductOverviewNgRxModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreModule.forFeature(_store_product_overview_reducer__WEBPACK_IMPORTED_MODULE_2__.productOverviewFeature), _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsModule.forFeature([])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductOverviewNgRxModule, {
    imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 6765:
/*!***************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-overview.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewComponent: () => (/* binding */ ProductOverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../libs/shared/ocapi/src/lib/components/login.component */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/common/constants/product-overview.constant */ 42351);
/* harmony import */ var _mappers_product_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mappers/product.mapper */ 45809);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 74300);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 33839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-layout */ 55606);
/* harmony import */ var _telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/shared/message/src/lib/message/message-flow.component */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/shared/page/src/lib/page/loader/loader.component */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_product_overview_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/product-overview.facade */ 39560);
/* harmony import */ var _product_overview_ngrx_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-overview-ngrx.module */ 84572);
/* harmony import */ var _mappers_profile_details_by_identity_id_mapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mappers/profile-details-by-identity-id.mapper */ 4825);
/* harmony import */ var _fleet_user_services_customer_customer_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../fleet-user/services/customer/customer-account.service */ 54371);
/* harmony import */ var _product_standalone_product_standalone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-standalone/product-standalone.component */ 36652);
/* harmony import */ var _product_notifications_product_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-notifications/product-notifications.component */ 50844);
/* eslint-disable sonarjs/cognitive-complexity */




























function ProductOverviewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tg-product-standalone", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openChangeTariffPlanForProduct", function ProductOverviewComponent_Conditional_7_Template_tg_product_standalone_openChangeTariffPlanForProduct_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openChangeTariffPlanForProduct($event));
    })("openAddOptionsOverlayForProduct", function ProductOverviewComponent_Conditional_7_Template_tg_product_standalone_openAddOptionsOverlayForProduct_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.openAddOptionsOverlayForProduct($event));
    })("openRemoveOptionsOverlayForProduct", function ProductOverviewComponent_Conditional_7_Template_tg_product_standalone_openRemoveOptionsOverlayForProduct_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openRemoveOptionsOverlayForProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isFleetUserOrderingEnabled", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 8, ctx_r0.isFleetUserOrderingEnabled$))("isSplitBill20AddOptionsEnabled", ctx_r0.isSplitBill20AddOptionsEnabled)("isSplitBill20RemoveOptionsEnabled", ctx_r0.isSplitBill20RemoveOptionsEnabled)("isSplitBill20ChangeTariffPlanEnabled", ctx_r0.isSplitBill20ChangeTariffPlanEnabled)("standAloneProducts", ctx_r0.selectedAccountProducts)("canManageProductHolding", ctx_r0.canManageProductHolding)("manageOptionUrl", ctx_r0.manageOptionUrl)("componentInstanceID", ctx_r0.componentInstanceID);
  }
}
class ProductOverviewComponent {
  ocapiService;
  urlService;
  productMapper;
  loginService;
  messageService;
  phoneNumberTransformService;
  productOverviewFacade;
  profileDetailsByIdentityIDMapper;
  manageOptionUrl;
  lineAddOptionsUrl;
  lineRemoveOptionsUrl;
  lineChangeTariffPlanUrl;
  componentInstanceID;
  isAccountSelectorConsumer;
  set enableSB20AddOptions(value) {
    this.isSplitBill20AddOptionsEnabled = value.toUpperCase() === 'TRUE';
  }
  set enableSB20RemoveOptions(value) {
    this.isSplitBill20RemoveOptionsEnabled = value.toUpperCase() === 'TRUE';
  }
  set enableSB20ChangeTariffPlan(value) {
    this.isSplitBill20ChangeTariffPlanEnabled = value.toUpperCase() === 'TRUE';
  }
  JSON = JSON;
  messageGroupName = 'product-overview';
  scopes = ['productholding'];
  status = [_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.ACTIVE_STATUS, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.SUSPENDED_STATUS, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.DISCONNECTED_STATUS].join(',');
  selectedAccountProducts = [];
  hasSalesScope = false;
  canManageProductHolding = false;
  showSuspendedPlanNotificationMessage = false;
  showMoveNotificationMessage = false;
  isFleetUserOrderingEnabled$;
  isSplitBill20AddOptionsEnabled;
  isSplitBill20RemoveOptionsEnabled;
  isSplitBill20ChangeTariffPlanEnabled;
  unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
  #loaderService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.LoaderService);
  #customerAccountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_fleet_user_services_customer_customer_account_service__WEBPACK_IMPORTED_MODULE_11__.CustomerAccountService);
  constructor(ocapiService, urlService, productMapper, loginService, messageService, phoneNumberTransformService, productOverviewFacade, profileDetailsByIdentityIDMapper) {
    this.ocapiService = ocapiService;
    this.urlService = urlService;
    this.productMapper = productMapper;
    this.loginService = loginService;
    this.messageService = messageService;
    this.phoneNumberTransformService = phoneNumberTransformService;
    this.productOverviewFacade = productOverviewFacade;
    this.profileDetailsByIdentityIDMapper = profileDetailsByIdentityIDMapper;
  }
  ngOnInit() {
    this.writeConfigToState();
  }
  initAfterLoggedIn() {
    this.productOverviewFacade.selectedAccountProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.unsubscribe$)).subscribe(products => {
      this.selectedAccountProducts = products;
    });
    this.productOverviewFacade.scopes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.unsubscribe$)).subscribe(scopes => {
      this.hasSalesScope = scopes.hasSalesScope;
      this.canManageProductHolding = scopes.canManageProductHolding;
    });
    this.isFleetUserOrderingEnabled$ = this.isSplitBill20AddOptionsEnabled || this.isSplitBill20RemoveOptionsEnabled || this.isSplitBill20ChangeTariffPlanEnabled ? this.#customerAccountService.isFleetUserOrderingEnabled(this.messageGroupName) : (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(false);
    this.loadProducts();
  }
  loadProducts() {
    this.#loaderService.start();
    const endPoint = this.getProductEndPoint();
    const config = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(this.messageGroupName, endPoint, this.productMapper, null);
    const ocapiGet$ = this.ocapiService.doGet(config);
    const loginDetails$ = this.loginService.getLoginDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(details => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([(0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(details), details.isPid ? this.getProfileDetailsByIdentityId(details.identityId) : (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(details.username)]);
    }));
    // we need a behaviourSubject for BASE. Otherwise, the combineLatest will not trigger.
    const accountSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject(new CustomEvent(''));
    if (this.isAccountSelectorConsumer) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.fromEvent)(document, 'selectedAccountModified').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.unsubscribe$)).subscribe(accountSelected$);
    }
    const products$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.forkJoin)([ocapiGet$, loginDetails$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)(([ocapiResponse, [loginDetailsResponse, profileDetailsByIdResponse]]) => {
      const products = ocapiResponse;
      const loginDetailsScopes = loginDetailsResponse.scopes || [];
      let normalizedMsisdn = '';
      if (typeof profileDetailsByIdResponse === 'string') {
        normalizedMsisdn = this.normalizedMsisdn(profileDetailsByIdResponse);
      }
      const loggedInMainProduct = this.findLoggedInMainProduct(products, normalizedMsisdn);
      const isPrepaidLogin = loggedInMainProduct?.productInfo?.hasCategory(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.PREPAID_MOBILE) || false;
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
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.combineLatest)([products$, accountSelected$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.unsubscribe$)).subscribe({
      next: ([products, selectedAccountEvent]) => {
        let selectedAccountProducts;
        const locationId = selectedAccountEvent.detail?.selectedAccount?.locationId;
        if (locationId) {
          selectedAccountProducts = products.filter(pr => pr.locationId === locationId);
        } else {
          selectedAccountProducts = products;
        }
        selectedAccountProducts = this.filterDisconnectedStatus(selectedAccountProducts);
        selectedAccountProducts = this.sortProducts(selectedAccountProducts);
        this.setIsProductUnderMove(selectedAccountProducts, products);
        this.renderNoProductErrorMessage(selectedAccountProducts);
        this.showSuspendedPlanNotificationMessage = this.showSuspendedPlan(selectedAccountProducts);
        this.showMoveNotificationMessage = this.showMoveNotification(selectedAccountProducts);
        // Update store
        this.productOverviewFacade.setSelectedAccountProducts(selectedAccountProducts);
        this.#loaderService.stop();
      },
      error: () => {
        /// STILLTOCHECK
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage('product-overview', _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.GENERIC_ERROR_CODE));
        this.#loaderService.stop();
      }
    });
  }
  findLoggedInMainProduct(products, normalizedMsisdn) {
    return products?.find(p => p.identifier.replace(/\s/g, '') === normalizedMsisdn?.replace(/\s/g, ''));
  }
  sortProducts(products) {
    return products.sort((a, b) => {
      return (a.productInfo.weight || 0) - (b.productInfo.weight || 0);
    });
  }
  filterDisconnectedStatus(products) {
    return products.filter(product => ![_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.DISCONNECTION_PASSED_PONR_STATUS, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.DISCONNECTED_STATUS].includes(product.status));
  }
  showSuspendedPlan(products) {
    return products.some(product => product.isProductSuspended());
  }
  showMoveNotification(products) {
    return products.some(product => product.isUnderMove);
  }
  setIsProductUnderMove(selectedAccountProducts, products) {
    selectedAccountProducts.forEach(selectedProduct => {
      let identifier = selectedProduct.identifier;
      if (selectedProduct.parentIdentifier) {
        identifier = selectedProduct.parentIdentifier;
      }
      products.forEach(product => {
        if (identifier === product.identifier && selectedProduct.addressId !== product.addressId && (selectedProduct.status === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.ACTIVATION_IN_PROGRESS_STATUS || selectedProduct.status === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.DISCONNECTION_IN_PROGRESS_STATUS)) {
          selectedProduct.isUnderMove = true;
        }
      });
    });
  }
  getProductEndPoint() {
    return this.getServiceURI(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.PRODUCT_SERVICE_PREFIX, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.API_VERSION_V1, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.CONTEXT_PRODUCT, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.EMPTY, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.EMPTY, `?status=${this.status}`);
  }
  getServiceURI(base, version, context, suffix, endpoint, queryParams) {
    const uri = base.concat(version).concat(context).concat(suffix).concat(endpoint);
    return queryParams ? uri.concat(queryParams) : uri;
  }
  normalizedMsisdn(msisdn) {
    return this.phoneNumberTransformService.transform(msisdn);
  }
  renderNoProductErrorMessage(products) {
    if (products.length === 0) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage('product-overview-with-comp', 'product-overview.error.no-products'));
    }
  }
  writeConfigToState() {
    const config = {
      manageOptionUrl: this.manageOptionUrl,
      componentInstanceID: this.componentInstanceID,
      isAccountSelectorConsumer: this.isAccountSelectorConsumer
    };
    this.productOverviewFacade.setConfig(config);
  }
  getProfileDetailsByIdentityId(identityId) {
    const suffix = '/' + identityId;
    const endPoint = this.getServiceURI(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.CUSTOMER_SERVICE_PREFIX, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.API_VERSION_V1, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.ENDPOINT_IDENTITY, suffix, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.EMPTY);
    const ocapiConfig = new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiCallConfig(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.MESSAGE_GROUP_CUSTOMER, endPoint, this.profileDetailsByIdentityIDMapper);
    return this.ocapiService.doGet(ocapiConfig);
  }
  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
  openAddOptionsOverlayForProduct(product) {
    this.redirectToUrlForMsisdn(this.lineAddOptionsUrl, product.identifier);
  }
  openRemoveOptionsOverlayForProduct(product) {
    this.redirectToUrlForMsisdn(this.lineRemoveOptionsUrl, product.identifier);
  }
  openChangeTariffPlanForProduct(product) {
    this.redirectToUrlForMsisdn(this.lineChangeTariffPlanUrl, product.identifier);
  }
  redirectToUrlForMsisdn(url, msisdn) {
    const params = new Map();
    params.set(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewConstants.MSISDN_PARAM, this.phoneNumberTransformService.autoFormatPhoneNumber(msisdn));
    const urlWithParams = this.urlService.buildUrlWithParams(url, params);
    this.#loaderService.start();
    this.urlService.redirectTo(urlWithParams);
  }
  static ɵfac = function ProductOverviewComponent_Factory(t) {
    return new (t || ProductOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.OcapiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mappers_product_mapper__WEBPACK_IMPORTED_MODULE_4__.ProductMapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_telenet_ng_lib_layout__WEBPACK_IMPORTED_MODULE_5__.PhoneNumberTransformService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_store_product_overview_facade__WEBPACK_IMPORTED_MODULE_8__.ProductOverviewFacade), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mappers_profile_details_by_identity_id_mapper__WEBPACK_IMPORTED_MODULE_10__.ProfileDetailsByIdentityIDMapper));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductOverviewComponent,
    selectors: [["tg-product-overview"]],
    inputs: {
      manageOptionUrl: "manageOptionUrl",
      lineAddOptionsUrl: "lineAddOptionsUrl",
      lineRemoveOptionsUrl: "lineRemoveOptionsUrl",
      lineChangeTariffPlanUrl: "lineChangeTariffPlanUrl",
      componentInstanceID: "componentInstanceID",
      isAccountSelectorConsumer: "isAccountSelectorConsumer",
      enableSB20AddOptions: "enableSB20AddOptions",
      enableSB20RemoveOptions: "enableSB20RemoveOptions",
      enableSB20ChangeTariffPlan: "enableSB20ChangeTariffPlan"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 10,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "enableLoader", "pageType", "enableMask", "startByDefault"], [3, "messageGroupName", "scopes", "componentCanRender"], [1, "product-overview"], [3, "showSuspendedPlanNotificationMessage", "showMoveNotificationMessage"], [1, "width--full", 3, "messageGroupName"], [3, "isFleetUserOrderingEnabled", "isSplitBill20AddOptionsEnabled", "isSplitBill20RemoveOptionsEnabled", "isSplitBill20ChangeTariffPlanEnabled", "standAloneProducts", "canManageProductHolding", "manageOptionUrl", "componentInstanceID"], [3, "isFleetUserOrderingEnabled", "isSplitBill20AddOptionsEnabled", "isSplitBill20RemoveOptionsEnabled", "isSplitBill20ChangeTariffPlanEnabled", "standAloneProducts", "canManageProductHolding", "manageOptionUrl", "componentInstanceID", "openChangeTariffPlanForProduct", "openAddOptionsOverlayForProduct", "openRemoveOptionsOverlayForProduct"]],
    template: function ProductOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tg-login", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("componentCanRender", function ProductOverviewComponent_Template_tg_login_componentCanRender_3_listener() {
          return ctx.initAfterLoggedIn();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "tg-product-notifications", 5)(6, "app-message-flow", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductOverviewComponent_Conditional_7_Template, 2, 10, "tg-product-standalone", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enableLoader", true)("pageType", "fleet-page")("enableMask", true)("startByDefault", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName)("scopes", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showSuspendedPlanNotificationMessage", ctx.showSuspendedPlanNotificationMessage)("showMoveNotificationMessage", ctx.showMoveNotificationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messageGroupName", ctx.messageGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](7, ctx.selectedAccountProducts.length > 0 ? 7 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginModule, _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.LoaderModule, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _product_overview_ngrx_module__WEBPACK_IMPORTED_MODULE_9__.ProductOverviewNgRxModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessagesModule, _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_6__.MessageFlowComponent, _product_standalone_product_standalone_component__WEBPACK_IMPORTED_MODULE_12__.ProductStandaloneComponent, _product_notifications_product_notifications_component__WEBPACK_IMPORTED_MODULE_13__.ProductNotificationsComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 87393:
/*!*******************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/pipes/phone-number.pipe.ts ***!
  \*******************************************************************************************************************/
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

/***/ 36652:
/*!************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/product-standalone.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductStandaloneComponent: () => (/* binding */ ProductStandaloneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/common/constants/product-overview.constant */ 42351);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-overview.service */ 24438);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/phone-number.pipe */ 87393);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/product-specifications/product-specifications.component */ 40608);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);












function ProductStandaloneComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = () => [];
const _c1 = (a0, a2) => ({
  product: a0,
  index: "",
  visibilityArray: a2
});
function ProductStandaloneComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, product_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0)));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", product_r5.handsets[0].handsetName, " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_i_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "physicalSimType");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_i_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "eSimType");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.esim-active"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_div_16_div_1_Template, 4, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19)(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.eSimStatus === "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, product_r5.identifier));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "simCardNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ng.product-overview.lbl.sim-card-number"), " ", " " + product_r5.simCardNumber, " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "pukCode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "ng.product-overview.lbl.puk-code"), " ", " " + product_r5.pukCode, " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-activation-in-progress"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-disconnection-in-progress"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.status-modification-in-progress"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "productSuspended");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ng.product-overview.lbl.status-suspended"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_0_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).product;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.showAddOptions(product_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.add-options"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_0_a_1_Template, 3, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive() || !product_r5.productType);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).product;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.showRemoveOptions(product_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.remove-options"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_1_a_1_Template, 3, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive() || !product_r5.productType);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_2_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).product;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.showChangeTariffPlan(product_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.change-tariff-plan"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_2_a_1_Template, 3, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive() || !product_r5.productType);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_0_Template, 2, 1, "div", 35)(1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_1_Template, 2, 1, "div", 35)(2, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Conditional_2_Template, 2, 1, "div", 35);
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r19.isSplitBill20AddOptionsEnabled ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r19.isSplitBill20RemoveOptionsEnabled ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx_r19.isSplitBill20ChangeTariffPlanEnabled ? 2 : -1);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_30_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_30_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.manageOptions(product_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_30_a_1_Template, 3, 3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive() || !product_r5.productType);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_0_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).product;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r55.showAddOptions(product_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.add-options"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_0_a_1_Template, 3, 3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive());
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).product;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r60.showRemoveOptions(product_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.remove-options"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_1_a_1_Template, 3, 3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive());
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_2_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).product;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r65.showChangeTariffPlan(product_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.change-tariff-plan"), " ");
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_2_a_1_Template, 3, 3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive() || !product_r5.productType);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_0_Template, 2, 1, "div", 39)(1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_1_Template, 2, 1, "div", 39)(2, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Conditional_2_Template, 2, 1, "div", 39);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](0, ctx_r21.isSplitBill20AddOptionsEnabled ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, ctx_r21.isSplitBill20RemoveOptionsEnabled ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](2, ctx_r21.isSplitBill20ChangeTariffPlanEnabled ? 2 : -1);
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_34_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Conditional_34_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);
      const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).product;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r70.manageOptions(product_r5, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ng.product-overview.lnk.manage-options"));
  }
}
function ProductStandaloneComponent_ng_template_3_div_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductStandaloneComponent_ng_template_3_div_0_Conditional_34_a_1_Template, 3, 3, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActive());
  }
}
const _c2 = (a0, a1) => ({
  "col-md-11": a0,
  "col-md-6": a1
});
const _c3 = (a0, a1) => ({
  "col-md-1": a0,
  "col-md-6": a1
});
function ProductStandaloneComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductStandaloneComponent_ng_template_3_div_0_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const visibilityArray_r7 = ctx_r75.visibilityArray;
      const index_r6 = ctx_r75.index;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](visibilityArray_r7[index_r6] = !visibilityArray_r7[index_r6]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "div", 12)(9, "div", 13)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductStandaloneComponent_ng_template_3_div_0_span_12_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductStandaloneComponent_ng_template_3_div_0_i_14_Template, 1, 1, "i", 14)(15, ProductStandaloneComponent_ng_template_3_div_0_i_15_Template, 1, 1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProductStandaloneComponent_ng_template_3_div_0_div_16_Template, 6, 4, "div", 16)(17, ProductStandaloneComponent_ng_template_3_div_0_div_17_Template, 4, 5, "div", 17)(18, ProductStandaloneComponent_ng_template_3_div_0_div_18_Template, 4, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18)(20, "div", 19)(21, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProductStandaloneComponent_ng_template_3_div_0_span_25_Template, 4, 3, "span", 22)(26, ProductStandaloneComponent_ng_template_3_div_0_span_26_Template, 4, 3, "span", 22)(27, ProductStandaloneComponent_ng_template_3_div_0_span_27_Template, 4, 3, "span", 22)(28, ProductStandaloneComponent_ng_template_3_div_0_span_28_Template, 4, 4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProductStandaloneComponent_ng_template_3_div_0_Conditional_29_Template, 3, 3)(30, ProductStandaloneComponent_ng_template_3_div_0_Conditional_30_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24)(32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductStandaloneComponent_ng_template_3_div_0_Conditional_33_Template, 3, 3)(34, ProductStandaloneComponent_ng_template_3_div_0_Conditional_34_Template, 2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "tg-product-specifications", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().product;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c2, !ctx_r8.showManageOptions(product_r5), ctx_r8.showManageOptions(product_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "icon-" + ctx_r8.getProductIcon(product_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-cy", "labelKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.handsets && product_r5.handsets.length > 0 && product_r5.handsets[0].handsetName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isPhysicalSim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isESim());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.productType === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.simCardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.pukCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 21, product_r5.identifier));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductActivationInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductDisconnectionInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductModificationInProgress());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isProductSuspended());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](29, ctx_r8.isFleetUserOrderingEnabled && product_r5.isSplitBill20() ? 29 : ctx_r8.showManageOptions(product_r5) ? 30 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c3, !ctx_r8.showManageOptions(product_r5), ctx_r8.showManageOptions(product_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](33, ctx_r8.isFleetUserOrderingEnabled && product_r5.isSplitBill20() ? 33 : ctx_r8.showManageOptions(product_r5) ? 34 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5)("manageOptionUrl", ctx_r8.manageOptionUrl)("componentInstanceID", ctx_r8.componentInstanceID);
  }
}
function ProductStandaloneComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductStandaloneComponent_ng_template_3_div_0_Template, 36, 29, "div", 4);
  }
  if (rf & 2) {
    const product_r5 = ctx.product;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.children.length === 0);
  }
}
class ProductStandaloneComponent extends _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.AbstractBaseComponent {
  urlService;
  productOverviewService;
  set standAloneProducts(products) {
    if (products?.length) {
      this.products = products;
    }
  }
  canManageProductHolding = false;
  manageOptionUrl;
  componentInstanceID;
  isFleetUserOrderingEnabled;
  isSplitBill20AddOptionsEnabled;
  isSplitBill20RemoveOptionsEnabled;
  isSplitBill20ChangeTariffPlanEnabled;
  openAddOptionsOverlayForProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  openRemoveOptionsOverlayForProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  openChangeTariffPlanForProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  products;
  constructor(urlService, productOverviewService) {
    super();
    this.urlService = urlService;
    this.productOverviewService = productOverviewService;
  }
  getProductIcon(product) {
    return this.productOverviewService.getProductIcon(product);
  }
  showManageOptions(product) {
    const isPrepaid = product.productInfo?.hasCategory?.(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE) || false;
    return (isPrepaid || this.canManageProductHolding) && !product.isUnderMove;
  }
  manageOptions(product, e) {
    e.stopPropagation();
    if (product) {
      const eventInfoData = this.productOverviewService.getClickEventInfoData(product);
      this.productOverviewService.addEventToDataLayer(eventInfoData, this.componentInstanceID);
    }
    let url = `${this.manageOptionUrl}?item=${product.identifier}&flow=${_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PRODUCT_OPTIONS}`;
    if (product && product.productType) {
      url += '&producttype=' + product.productType;
    }
    if (product && product.status === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STATUS_NOT_ACTIVE) {
      url += '&productcode=' + product.productInfo.externalProductCode;
    } else if (product && product.upgradePossibleTo) {
      url += '&productcode=' + product.upgradePossibleTo;
    }
    this.urlService.redirectTo(url);
  }
  showAddOptions(product) {
    this.openAddOptionsOverlayForProduct.emit(product);
  }
  showRemoveOptions(product) {
    this.openRemoveOptionsOverlayForProduct.emit(product);
  }
  showChangeTariffPlan(product) {
    this.openChangeTariffPlanForProduct.emit(product);
  }
  static ɵfac = function ProductStandaloneComponent_Factory(t) {
    return new (t || ProductStandaloneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductStandaloneComponent,
    selectors: [["tg-product-standalone"]],
    inputs: {
      standAloneProducts: "standAloneProducts",
      canManageProductHolding: "canManageProductHolding",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      isFleetUserOrderingEnabled: "isFleetUserOrderingEnabled",
      isSplitBill20AddOptionsEnabled: "isSplitBill20AddOptionsEnabled",
      isSplitBill20RemoveOptionsEnabled: "isSplitBill20RemoveOptionsEnabled",
      isSplitBill20ChangeTariffPlanEnabled: "isSplitBill20ChangeTariffPlanEnabled"
    },
    outputs: {
      openAddOptionsOverlayForProduct: "openAddOptionsOverlayForProduct",
      openRemoveOptionsOverlayForProduct: "openRemoveOptionsOverlayForProduct",
      openChangeTariffPlanForProduct: "openChangeTariffPlanForProduct"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 1,
    consts: [[1, "product-overview"], [4, "ngFor", "ngForOf"], ["standalone", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [1, "content-section", "mb-20"], [1, "content-section__details", 3, "click"], [1, "row", "display--flex", "align-items--center"], [1, "col-xs-11", "display--flex", "align-items--start", 3, "ngClass"], [1, "product-overview__content-section__image", "display--flex", "align-items--center", "justify-content--center"], [1, "icon", "icon-md", "icon-no-size-override", "text-weight--xxs", 3, "ngClass"], [1, "product-overview__heading", "display--flex--md", "align-items--center"], [1, "ml--m"], [1, "text-font-family--t7", "text--xxm"], ["class", "icon icon-md icon-sim-card mr--m", 4, "ngIf"], ["class", "icon icon-md icon-sim-esim mr--m", 4, "ngIf"], ["class", "display--flex--md align-items--center pt--xxs product-overview__hide-base", 4, "ngIf"], ["class", "text--s", 4, "ngIf"], [1, "display--flex--md", "align-items--center", "pt--xxs", "product-overview__hide-telenet"], [1, "text--s"], [1, "pr--xxxs"], [1, "pl--m", "pt--xxs", "pt--n--md"], ["class", "status-indicator status-indicator--warning mb--m mb--n--md", 4, "ngIf"], ["class", "status-indicator status-indicator--negative mb--m mb--n--md", 4, "ngIf"], [1, "col-xs-1", "text-align--right", 3, "ngClass"], [1, "display--flex--md", "align-items--center", "justify-content--end--md"], [3, "product", "manageOptionUrl", "componentInstanceID"], [1, "icon", "icon-md", "icon-sim-card", "mr--m"], [1, "icon", "icon-md", "icon-sim-esim", "mr--m"], [1, "display--flex--md", "align-items--center", "pt--xxs", "product-overview__hide-base"], ["class", "mr--xxs--md mb--n--md mb--xxs mt--xxs", 4, "ngIf"], [1, "mr--xxs--md", "mb--n--md", "mb--xxs", "mt--xxs"], [1, "status-indicator", "status-indicator--positive"], [1, "status-indicator", "status-indicator--warning", "mb--m", "mb--n--md"], [1, "status-indicator", "status-indicator--negative", "mb--m", "mb--n--md"], ["class", "hide-from-md pt-5 pl--m"], [1, "hide-from-md", "pt-5", "pl--m"], ["class", "font--body-regular product-overview__hide-base link link--subtle", 3, "click", 4, "ngIf"], [1, "font--body-regular", "product-overview__hide-base", "link", "link--subtle", 3, "click"], ["class", "hide-until-md"], [1, "hide-until-md"], ["class", "font--body-regular ml--xxxl--md link link--subtle", 3, "click", 4, "ngIf"], [1, "font--body-regular", "ml--xxxl--md", "link", "link--subtle", 3, "click"]],
    template: function ProductStandaloneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductStandaloneComponent_ng_container_2_Template, 2, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductStandaloneComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _views_product_specifications_product_specifications_component__WEBPACK_IMPORTED_MODULE_6__.ProductSpecificationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_4__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 81422:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/views/product-specifications/product-extra-options/product-extra-options.component.ts ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductExtraOptionsComponent: () => (/* binding */ ProductExtraOptionsComponent)
/* harmony export */ });
/* harmony import */ var _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../fleet-user/product/shared/models/product.model */ 32689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-options-specifications/product-options-specifications.component */ 12793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function ProductExtraOptionsComponent_div_4_div_1_span_2_Template(rf, ctx) {
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
function ProductExtraOptionsComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductExtraOptionsComponent_div_4_div_1_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "tg-product-options-specifications", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", option_r1.activeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "extraOptionLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("services", option_r1 == null ? null : option_r1.productInfo == null ? null : option_r1.productInfo.services);
  }
}
function ProductExtraOptionsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductExtraOptionsComponent_div_4_div_1_Template, 6, 4, "div", 3);
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
      product: "product"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "mt--m"], [1, "text-font-family--t7"], [4, "ngFor", "ngForOf"], ["class", "pt--xs", 4, "ngIf"], [1, "pt--xs"], [4, "ngIf"], [3, "services"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__.ProductOptionsSpecificationsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 72722:
/*!************************************************************************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/views/product-specifications/product-included-options/product-included-options.component.ts ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductIncludedOptionsComponent: () => (/* binding */ ProductIncludedOptionsComponent)
/* harmony export */ });
/* harmony import */ var _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../fleet-user/product/shared/models/product.model */ 32689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-options-specifications/product-options-specifications.component */ 12793);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






function ProductIncludedOptionsComponent_div_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tg-product-options-specifications", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-cy", "includedOptionLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r3.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("services", option_r3 == null ? null : option_r3.productInfo == null ? null : option_r3.productInfo.services);
  }
}
function ProductIncludedOptionsComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_5_div_1_div_1_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", option_r3.isIncludedOption);
  }
}
function ProductIncludedOptionsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_5_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.product.options);
  }
}
function ProductIncludedOptionsComponent_div_6_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tg-product-options-specifications", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pack_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pack_r7.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("services", pack_r7 == null ? null : pack_r7.productInfo == null ? null : pack_r7.productInfo.services);
  }
}
function ProductIncludedOptionsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_6_div_1_div_1_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pack_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pack_r7.isIncludedOption);
  }
}
function ProductIncludedOptionsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductIncludedOptionsComponent_div_6_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.product.contentPacks);
  }
}
class ProductIncludedOptionsComponent {
  product;
  static ɵfac = function ProductIncludedOptionsComponent_Factory(t) {
    return new (t || ProductIncludedOptionsComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductIncludedOptionsComponent,
    selectors: [["tg-product-included-options"]],
    inputs: {
      product: "product"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 5,
    consts: [[1, "mt--m"], [1, "divider", "divider--xxxs__grey", "mb--s"], [1, "text-font-family--t7"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "pt--xs", 4, "ngIf"], [1, "pt--xs"], [3, "services"]],
    template: function ProductIncludedOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductIncludedOptionsComponent_div_5_Template, 2, 1, "div", 3)(6, ProductIncludedOptionsComponent_div_6_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "ng.product-overview.lbl.included-options"));
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

/***/ 56660:
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/views/product-specifications/product-level-specifications/product-level-specifications.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductLevelSpecificationsComponent: () => (/* binding */ ProductLevelSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _store_product_overview_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store/product-overview.facade */ 39560);
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../shared/common/constants/product-overview.constant */ 42351);
/* harmony import */ var _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../fleet-user/product/shared/models/product.model */ 32689);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









const _c0 = a0 => ({
  amount: a0
});
function ProductLevelSpecificationsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "ng.product-overview.text.specifications.monthly.amount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 4, "ng.product-overview.lbl.monetary-amount", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx_r0.product.price.taxInclPrices.recurrentDiscounted)), " ");
  }
}
const _c1 = (a0, a1) => ({
  "col-8": a0,
  "col-12": a1
});
function ProductLevelSpecificationsComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](3, _c1, spec_r2.isValue || spec_r2.isRange, !spec_r2.isValue && !spec_r2.isRange));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "specificationName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", spec_r2.localizedContent == null ? null : spec_r2.localizedContent.name, " ");
  }
}
function ProductLevelSpecificationsComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "specificationValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.getLocalizedLabel(spec_r2.value));
  }
}
function ProductLevelSpecificationsComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](spec_r2.minValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "ng.product-overview.text.to"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](spec_r2.maxValue);
  }
}
function ProductLevelSpecificationsComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-cy", "specificationValueUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.getLocalizedLabel(spec_r2.unit), "");
  }
}
const _c2 = a0 => ({
  "pt-0": a0
});
function ProductLevelSpecificationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProductLevelSpecificationsComponent_div_1_div_1_Template, 2, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProductLevelSpecificationsComponent_div_1_span_3_Template, 3, 2, "span", 9)(4, ProductLevelSpecificationsComponent_div_1_span_4_Template, 8, 5, "span", 9)(5, ProductLevelSpecificationsComponent_div_1_span_5_Template, 2, 2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c2, spec_r2.isMonetary));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !spec_r2.isMonetary);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", spec_r2.isValue && spec_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", spec_r2.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", spec_r2.showUnit);
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
    if (valueUpperCased === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.UNLIMITED) {
      return this.translateService.instant('ng.product-overview.lbl.unlimited');
    } else if (valueUpperCased === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.SMS_UNIT) {
      return this.translateService.instant('ng.product-overview.lbl.sms-unit');
    }
    return value;
  }
  retrieveAndSetSpecifications() {
    this.productOverviewFacade.selectedAccountProducts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(products => {
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
    return new (t || ProductLevelSpecificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_store_product_overview_facade__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewFacade));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ProductLevelSpecificationsComponent,
    selectors: [["tg-product-level-specifications"]],
    inputs: {
      product: "product",
      isBundle: "isBundle"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 2,
    consts: [["class", "row display--flex--md pt--m", 4, "ngIf"], ["class", "row display--flex pt--m", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "row", "display--flex--md", "pt--m"], [1, "col-md-4", "col-8"], [1, "col-md-2", "col-4", "text-align--right", "text-align--left--md"], [1, "text-weight--l"], [1, "row", "display--flex", "pt--m", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], [1, "col-4", "text-align--right", "text-weight--l", "mt--n--md"], [4, "ngIf"], [3, "ngClass"]],
    template: function ProductLevelSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProductLevelSpecificationsComponent_div_0_Template, 8, 9, "div", 0)(1, ProductLevelSpecificationsComponent_div_1_Template, 6, 7, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.product.price == null ? null : ctx.product.price.taxInclPrices == null ? null : ctx.product.price.taxInclPrices.recurrentDiscounted);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.specifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__.TranslatePipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 12793:
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/views/product-specifications/product-options-specifications/product-options-specifications.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOptionsSpecificationsComponent: () => (/* binding */ ProductOptionsSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


function ProductOptionsSpecificationsComponent_div_0_ng_container_1_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const spec_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.getFormattedSpecifications(spec_r3.localizedContent == null ? null : spec_r3.localizedContent.name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-cy", "optionSpecifications");
  }
}
function ProductOptionsSpecificationsComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductOptionsSpecificationsComponent_div_0_ng_container_1_ul_1_Template, 2, 2, "ul", 1);
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
      services: "services"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], ["class", "mt-10 ml--m", 4, "ngIf"], [1, "mt-10", "ml--m"], [1, "data--key", 3, "innerHTML"]],
    template: function ProductOptionsSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductOptionsSpecificationsComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.services);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
    encapsulation: 2
  });
}

/***/ }),

/***/ 40608:
/*!*********************************************************************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/product-standalone/views/product-specifications/product-specifications.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationsComponent: () => (/* binding */ ProductSpecificationsComponent)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/common/constants/product-overview.constant */ 42351);
/* harmony import */ var _services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product-overview.service */ 24438);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/events.constant */ 76295);
/* harmony import */ var _fleet_user_product_shared_models_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../fleet-user/product/shared/models/product.model */ 32689);
/* harmony import */ var _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/phone-number.pipe */ 87393);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 10875);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-extra-options/product-extra-options.component */ 81422);
/* harmony import */ var _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-included-options/product-included-options.component */ 72722);
/* harmony import */ var _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-options-specifications/product-options-specifications.component */ 12793);
/* harmony import */ var _product_level_specifications_product_level_specifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-level-specifications/product-level-specifications.component */ 56660);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 84569);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);


















function ProductSpecificationsComponent_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("data-cy", "dropdown");
  }
}
function ProductSpecificationsComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 8);
  }
}
const _c0 = a0 => ({
  amount: a0
});
const _c1 = a0 => ({
  unit: a0
});
function ProductSpecificationsComponent_div_9_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 15)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 16)(6, "span");
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
    const rate_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 5, "ng.product-overview.lbl." + rate_r11.type)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 7, "ng.product-overview.text.specifications-for-base-zero-value", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](13, _c0, rate_r11.cost)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](12, 10, "ng.product-overview.text.specifications-for-base-zero-unit", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](15, _c1, rate_r11.unit)), " ");
  }
}
const _c2 = a0 => ({
  "pre-paid": a0
});
function ProductSpecificationsComponent_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ProductSpecificationsComponent_div_9_div_4_div_3_Template, 13, 17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](3, _c2, ctx_r3.product.productInfo.hasCategory(ctx_r3.PREPAID_MOBILE)));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r3.product.productInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r3.product.productInfo.rates);
  }
}
function ProductSpecificationsComponent_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-level-specifications", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", ctx_r4.product)("isBundle", ctx_r4.isBundle);
  }
}
function ProductSpecificationsComponent_div_9_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r12.product.identifier));
  }
}
function ProductSpecificationsComponent_div_9_div_6_ng_container_5_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "ng.product-overview.lbl.esim-active"), " ");
  }
}
function ProductSpecificationsComponent_div_9_div_6_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "phoneNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ProductSpecificationsComponent_div_9_div_6_ng_container_5_div_1_div_5_Template, 4, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const line_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, line_r15.identifier));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", line_r15.eSimStatus === "Active");
  }
}
function ProductSpecificationsComponent_div_9_div_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductSpecificationsComponent_div_9_div_6_ng_container_5_div_1_Template, 6, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r13.product.mobileIdentifier);
  }
}
function ProductSpecificationsComponent_div_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProductSpecificationsComponent_div_9_div_6_div_4_Template, 3, 3, "div", 19)(5, ProductSpecificationsComponent_div_9_div_6_ng_container_5_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 3, "ng.product-overview.text.available-numbers"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !(ctx_r5.product.mobileIdentifier == null ? null : ctx_r5.product.mobileIdentifier.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.product.mobileIdentifier == null ? null : ctx_r5.product.mobileIdentifier.length);
  }
}
function ProductSpecificationsComponent_div_9_div_7_div_1_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, "ng.product-overview.lbl.monetary-amount", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, handset_r18.contract.price == null ? null : handset_r18.contract.price.earlyTerminationFee)), " ");
  }
}
function ProductSpecificationsComponent_div_9_div_7_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProductSpecificationsComponent_div_9_div_7_div_1_div_19_div_4_Template, 3, 6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "ng.product-overview.text.contract-TerminationFee"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", handset_r18.contract == null ? null : handset_r18.contract.price == null ? null : handset_r18.contract.price.earlyTerminationFee);
  }
}
function ProductSpecificationsComponent_div_9_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 27)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 29)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 27)(13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ProductSpecificationsComponent_div_9_div_7_div_1_div_19_Template, 5, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handset_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 7, "ng.product-overview.text.contract-information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 9, "ng.product-overview.text.contract-duration"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", handset_r18.contract.duration, " ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 11, "ng.product-overview.lbl.months"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](15, 13, "ng.product-overview.text.contract-obligationEndDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](18, 15, handset_r18.contract.obligationEndDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r17.product.hasValidPrice(handset_r18.contract == null ? null : handset_r18.contract.price == null ? null : handset_r18.contract.price.earlyTerminationFee));
  }
}
function ProductSpecificationsComponent_div_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductSpecificationsComponent_div_9_div_7_div_1_Template, 20, 18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r6.product.handsets);
  }
}
function ProductSpecificationsComponent_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "tg-product-options-specifications", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("services", ctx_r7.product.productInfo.services);
  }
}
function ProductSpecificationsComponent_div_9_tg_product_included_options_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-product-included-options", 34);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", ctx_r8.product);
  }
}
function ProductSpecificationsComponent_div_9_tg_product_extra_options_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tg-product-extra-options", 34);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", ctx_r9.product);
  }
}
function ProductSpecificationsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ProductSpecificationsComponent_div_9_div_4_Template, 4, 5, "div", 9)(5, ProductSpecificationsComponent_div_9_div_5_Template, 2, 2, "div", 6)(6, ProductSpecificationsComponent_div_9_div_6_Template, 6, 5, "div", 10)(7, ProductSpecificationsComponent_div_9_div_7_Template, 2, 1, "div", 6)(8, ProductSpecificationsComponent_div_9_div_8_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ProductSpecificationsComponent_div_9_tg_product_included_options_9_Template, 1, 1, "tg-product-included-options", 12)(10, ProductSpecificationsComponent_div_9_tg_product_extra_options_10_Template, 1, 1, "tg-product-extra-options", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.product.productInfo.isShowRates());
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.product.productInfo.isShowRates() && (ctx_r2.product.productInfo.services == null ? null : ctx_r2.product.productInfo.services.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.product.identifier && ctx_r2.product.productType === "mobile" && ctx_r2.isBundle);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.product == null ? null : ctx_r2.product.handsets == null ? null : ctx_r2.product.handsets.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.product.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.product.hasIncludedOptions || (ctx_r2.product.contentPacks == null ? null : ctx_r2.product.contentPacks.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.product.hasExtraOptions);
  }
}
class ProductSpecificationsComponent {
  urlService;
  dataLayerService;
  productOverviewService;
  product;
  manageOptionUrl;
  componentInstanceID;
  isBundle = false;
  showFeature = false;
  PREPAID_MOBILE = _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PREPAID_MOBILE;
  constructor(urlService, dataLayerService, productOverviewService) {
    this.urlService = urlService;
    this.dataLayerService = dataLayerService;
    this.productOverviewService = productOverviewService;
  }
  toggleVisibilityFeature(visible) {
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
  static ɵfac = function ProductSpecificationsComponent_Factory(t) {
    return new (t || ProductSpecificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__.DataLayerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_product_overview_service__WEBPACK_IMPORTED_MODULE_3__.ProductOverviewService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ProductSpecificationsComponent,
    selectors: [["tg-product-specifications"]],
    inputs: {
      product: "product",
      manageOptionUrl: "manageOptionUrl",
      componentInstanceID: "componentInstanceID",
      isBundle: "isBundle"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 6,
    consts: [[1, "row"], [1, "col-xs-12", "background-shade_04", "p--l", "mt--m"], [1, "display--flex", "justify-content--between", "cursor--pointer", "align-items--center", 3, "click"], [1, "text-font-family--t7"], ["class", "icon icon-md icon-chevron-down product-overview__icon-section", 4, "ngIf"], ["class", "icon icon-md icon-chevron-up product-overview__icon-section", 4, "ngIf"], [4, "ngIf"], [1, "icon", "icon-md", "icon-chevron-down", "product-overview__icon-section"], [1, "icon", "icon-md", "icon-chevron-up", "product-overview__icon-section"], ["class", "pt--xs", 3, "ngClass", 4, "ngIf"], ["class", "pt--xs", 4, "ngIf"], ["class", "product-overview__hide-base", 4, "ngIf"], [3, "product", 4, "ngIf"], [1, "pt--xs", 3, "ngClass"], ["class", "display--flex--md justify-content--between pt--xs", 4, "ngFor", "ngForOf"], [1, "display--flex--md", "justify-content--between", "pt--xs"], [1, "text-weight--l", "mt--n--md", "mt--xxs"], [3, "product", "isBundle"], [1, "pt--xs"], ["class", "pt--m", 4, "ngIf"], [1, "pt--m"], [4, "ngFor", "ngForOf"], [1, "display--flex", "mt--m", "align-items--center"], ["class", "pl--s", 4, "ngIf"], [1, "pl--s"], [1, "status-indicator", "status-indicator--positive"], [1, "mt--xs", "text-weight--l"], [1, "row", "display--flex--md", "justify-content--between", "pt--xs", "line-height--24"], [1, "col-md-10", "col-xs-12"], [1, "col-md-2", "col-xs-12", "text-align--right--md", "text-weight--l", "mt--n--md", "mt--xxs"], ["class", "row display--flex--md justify-content--between pt--xs line-height--24", 4, "ngIf"], ["class", "col-md-2 col-xs-12 text-align--right--md text-weight--l mt--n--md mt--xxs", 4, "ngIf"], [1, "product-overview__hide-base"], [3, "services"], [3, "product"]],
    template: function ProductSpecificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProductSpecificationsComponent_Template_div_click_3_listener() {
          return ctx.toggleVisibilityFeature(!ctx.showFeature);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ProductSpecificationsComponent_i_7_Template, 1, 1, "i", 4)(8, ProductSpecificationsComponent_i_8_Template, 1, 0, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ProductSpecificationsComponent_div_9_Template, 11, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 4, "ng.product-overview.lbl.feature-included"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.showFeature);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showFeature);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.showFeature);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgFor, _product_level_specifications_product_level_specifications_component__WEBPACK_IMPORTED_MODULE_11__.ProductLevelSpecificationsComponent, _product_options_specifications_product_options_specifications_component__WEBPACK_IMPORTED_MODULE_10__.ProductOptionsSpecificationsComponent, _product_included_options_product_included_options_component__WEBPACK_IMPORTED_MODULE_9__.ProductIncludedOptionsComponent, _product_extra_options_product_extra_options_component__WEBPACK_IMPORTED_MODULE_8__.ProductExtraOptionsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _pipes_phone_number_pipe__WEBPACK_IMPORTED_MODULE_6__.PhoneNumberPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 24438:
/*!**********************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/services/product-overview.service.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewService: () => (/* binding */ ProductOverviewService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-datalayer */ 42782);
/* harmony import */ var _telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_datalayer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/events.constant */ 76295);
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/common/constants/product-overview.constant */ 42351);
/* harmony import */ var _constants_product_icon_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/product-icon.constant */ 86399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class ProductOverviewService {
  dataLayerService;
  constructor(dataLayerService) {
    this.dataLayerService = dataLayerService;
  }
  getClickEventInfoData(product) {
    let eventName = _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_NAME_MANAGE_OPTION_CLICK;
    if ((product.status === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.STATUS_NOT_ACTIVE || product.status === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.DISCONNECTED_STATUS) && !product.upgradePossibleTo || product.status === _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.ACTIVE_STATUS && product.upgradePossibleTo) {
      eventName = _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_NAME_SECURITY_OPTION_CLICK;
    }
    return this.dataLayerService.createEventInfo(eventName, _constants_events_constant__WEBPACK_IMPORTED_MODULE_1__.EventsConstants.EVENT_TYPE_CLICK);
  }
  addEventToDataLayer(eventInfoData, componentInstanceID, attributes) {
    const category = this.dataLayerService.getCategory(componentInstanceID) || this.dataLayerService.createCategory(_shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.PRIMARY_CATEGORY_FLEET, _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_2__.ProductOverviewConstants.SUB_CATEGORY1_FLEET_PRODUCT);
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

/***/ 78125:
/*!*******************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/store/product-overview.actions.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setConfig: () => (/* binding */ setConfig),
/* harmony export */   setScopes: () => (/* binding */ setScopes),
/* harmony export */   setSelectedAccountProducts: () => (/* binding */ setSelectedAccountProducts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);

const setSelectedAccountProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setSelectedAccountProducts`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setConfig = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setConfig`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setScopes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`[product-overview] setScopes`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 39560:
/*!******************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/store/product-overview.facade.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductOverviewFacade: () => (/* binding */ ProductOverviewFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_overview_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.actions */ 78125);
/* harmony import */ var _product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-overview.selectors */ 21705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);





class ProductOverviewFacade {
  store;
  get selectedAccountProducts$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectSelectedAccountProducts);
  }
  get config$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectConfig);
  }
  get scopes$() {
    return this.store.select(_product_overview_selectors__WEBPACK_IMPORTED_MODULE_2__.selectScopes);
  }
  setSelectedAccountProducts(products) {
    this.store.dispatch((0,_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setSelectedAccountProducts)({
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

/***/ 77669:
/*!*******************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/store/product-overview.reducer.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRODUCT_OVERVIEW_FEATURE_KEY: () => (/* binding */ PRODUCT_OVERVIEW_FEATURE_KEY),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   productOverviewFeature: () => (/* binding */ productOverviewFeature),
/* harmony export */   productOverviewReducer: () => (/* binding */ productOverviewReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ 75825);
/* harmony import */ var _product_overview_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.actions */ 78125);



const PRODUCT_OVERVIEW_FEATURE_KEY = 'product-overview';
const initialState = {
  selectedAccountProducts: [],
  config: {
    manageOptionUrl: '',
    componentInstanceID: '',
    isAccountSelectorConsumer: false
  },
  scopes: {
    isPrepaidLogin: false,
    hasSalesScope: false,
    canManageProductHolding: false
  }
};
const productOverviewReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setSelectedAccountProducts, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.selectedAccountProducts = action.products;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setConfig, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.config = action.config;
  });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.on)(_product_overview_actions__WEBPACK_IMPORTED_MODULE_1__.setScopes, (state, action) => {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)(state, draft => {
    draft.scopes = action.scopes;
  });
}));
const productOverviewFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeature)({
  name: PRODUCT_OVERVIEW_FEATURE_KEY,
  reducer: productOverviewReducer
});

/***/ }),

/***/ 21705:
/*!*********************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-product/product-overview/store/product-overview.selectors.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectConfig: () => (/* binding */ selectConfig),
/* harmony export */   selectProductOverview: () => (/* binding */ selectProductOverview),
/* harmony export */   selectScopes: () => (/* binding */ selectScopes),
/* harmony export */   selectSelectedAccountProducts: () => (/* binding */ selectSelectedAccountProducts)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 48986);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_overview_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.reducer */ 77669);


const selectProductOverview = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_product_overview_reducer__WEBPACK_IMPORTED_MODULE_1__.PRODUCT_OVERVIEW_FEATURE_KEY);
const selectSelectedAccountProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.selectedAccountProducts);
const selectConfig = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.config);
const selectScopes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductOverview, productOverview => productOverview.scopes);

/***/ }),

/***/ 81903:
/*!******************************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-user/product/shared/enums/split-bill-profile-type.enum.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitBillProfileTypeEnum: () => (/* binding */ SplitBillProfileTypeEnum)
/* harmony export */ });
var SplitBillProfileTypeEnum;
(function (SplitBillProfileTypeEnum) {
  SplitBillProfileTypeEnum["SB10"] = "SB10";
  SplitBillProfileTypeEnum["SB20"] = "SB20";
})(SplitBillProfileTypeEnum || (SplitBillProfileTypeEnum = {}));

/***/ }),

/***/ 32689:
/*!****************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-user/product/shared/models/product.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Product: () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/common/constants/product-overview.constant */ 42351);
/* harmony import */ var _shared_common_enums_sim_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/common/enums/sim-type.enum */ 1912);
/* harmony import */ var _enums_split_bill_profile_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/split-bill-profile-type.enum */ 81903);



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
  simCardType;
  simCardNumber;
  pukCode;
  isUpgraded;
  isAdded;
  isAffected;
  newTariffPlan;
  volume;
  splitBillProfileType;
  isProductActive() {
    return this.status === 'ACTIVE';
  }
  isProductSuspended() {
    return _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.SUSPEND_PRODUCT_STATUSES.includes(this.status);
  }
  isProductModificationInProgress() {
    return _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.MODIFICATION_PRODUCT_STATUSES.includes(this.status);
  }
  isProductDisconnectionInProgress() {
    return _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.DISCONNECTION_PRODUCT_STATUSES.includes(this.status);
  }
  isProductActivationInProgress() {
    return _shared_common_constants_product_overview_constant__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewConstants.ACTIVATION_PRODUCT_STATUSES.includes(this.status);
  }
  isC5Bundle() {
    return this.bundleType === Product.BUNDLE_TYPE_C5 || !!this.bundleType?.match(Product.BUNDLE_TYPE_KLIK);
  }
  hasValidPrice(price) {
    return price && price !== '0' && price !== '0,0' && price !== '0,00' && price !== '0.0' && price !== '0.00';
  }
  isESim() {
    return this.simCardType === _shared_common_enums_sim_type_enum__WEBPACK_IMPORTED_MODULE_1__.SimTypeEnum.E_SIM;
  }
  isPhysicalSim() {
    return this.simCardType === _shared_common_enums_sim_type_enum__WEBPACK_IMPORTED_MODULE_1__.SimTypeEnum.PHYSICAL_SIM;
  }
  isSplitBill20() {
    return this.splitBillProfileType === _enums_split_bill_profile_type_enum__WEBPACK_IMPORTED_MODULE_2__.SplitBillProfileTypeEnum.SB20;
  }
}

/***/ }),

/***/ 54371:
/*!***********************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/fleet-user/services/customer/customer-account.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerAccountService: () => (/* binding */ CustomerAccountService)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-ocapi */ 76158);
/* harmony import */ var _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);




class CustomerAccountService {
  ocapiService;
  static BASE_URL = '/public/api/fleet-customer-service/v1';
  constructor(ocapiService) {
    this.ocapiService = ocapiService;
  }
  isFleetUserOrderingEnabled(messageGroup) {
    return this.getCustomerAccountProperties(messageGroup).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(properties => properties.fleetUserOrderingEnabled));
  }
  getCustomerAccountProperties(messageGroup) {
    const endpoint = `${CustomerAccountService.BASE_URL}/customer-account/properties`;
    return this.ocapiService.doGet(new _telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiCallConfig(messageGroup, endpoint));
  }
  static ɵfac = function CustomerAccountService_Factory(t) {
    return new (t || CustomerAccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_telenet_ng_lib_ocapi__WEBPACK_IMPORTED_MODULE_0__.OcapiService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CustomerAccountService,
    factory: CustomerAccountService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 42351:
/*!*******************************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/constants/product-overview.constant.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataLimitEnum: () => (/* binding */ DataLimitEnum),
/* harmony export */   ProductOverviewConstants: () => (/* binding */ ProductOverviewConstants)
/* harmony export */ });
class ProductOverviewConstants {
  static EMPTY = '';
  static MSISDN_PARAM = 'msisdn';
  static API_VERSION_V1 = 'v1';
  static API_VERSION_V2 = 'v2';
  static CONTEXT_PRODUCT = '/products';
  static PRODUCT_SERVICE_PREFIX = '/public/api/fleet-product-service/';
  static CUSTOMER_SERVICE_PREFIX = '/public/api/fleet-customer-service/';
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
  static PRIMARY_CATEGORY_FLEET = 'fleet';
  static SUB_CATEGORY1_FLEET_PRODUCT = 'product';
}
var DataLimitEnum;
(function (DataLimitEnum) {
  DataLimitEnum["UNLIMITED"] = "Unlimited";
  DataLimitEnum["UNKNOWN"] = "Unknown";
})(DataLimitEnum || (DataLimitEnum = {}));

/***/ }),

/***/ 1912:
/*!***************************************************************************!*\
  !*** ./apps/fleet/fleet-mfe/src/app/shared/common/enums/sim-type.enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimTypeEnum: () => (/* binding */ SimTypeEnum)
/* harmony export */ });
var SimTypeEnum;
(function (SimTypeEnum) {
  SimTypeEnum["PHYSICAL_SIM"] = "PHYSICAL_SIM";
  SimTypeEnum["E_SIM"] = "E_SIM";
})(SimTypeEnum || (SimTypeEnum = {}));

/***/ }),

/***/ 58071:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BehaviorSubject: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 72513);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}

/***/ }),

/***/ 36959:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 12235:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 14373);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 22476);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 50575);







class Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
      const {
        operator,
        source
      } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: value => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
    return this;
  }
  pipe(...operations) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 72513:
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subject.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: () => (/* binding */ AnonymousSubject),
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ 12235);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 61558);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ 35559);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ 50575);





class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
  constructor() {
    super();
    this.closed = false;
    this.currentObservers = null;
    this.observers = [];
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  }
  next(value) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        if (!this.currentObservers) {
          this.currentObservers = Array.from(this.observers);
        }
        for (const observer of this.currentObservers) {
          observer.next(value);
        }
      }
    });
  }
  error(err) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  }
  complete() {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.isStopped = true;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  }
  get observed() {
    var _a;
    return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  _trySubscribe(subscriber) {
    this._throwIfClosed();
    return super._trySubscribe(subscriber);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  }
  _innerSubscribe(subscriber) {
    const {
      hasError,
      isStopped,
      observers
    } = this;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
      this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      thrownError,
      isStopped
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  }
  asObservable() {
    const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    observable.source = this;
    return observable;
  }
}
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  }
}

/***/ }),

/***/ 58559:
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 31523);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 15445);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 16929);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 72707);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 36959);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 38411);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 50575);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 31523:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 82602);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 30101);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 35559);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 15445:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/config.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 33839:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/combineLatest.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLatest: () => (/* binding */ combineLatest),
/* harmony export */   combineLatestInit: () => (/* binding */ combineLatestInit)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/argsArgArrayOrObject */ 17346);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from */ 56231);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/identity */ 10204);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 97825);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 76190);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/createObject */ 26118);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 35678);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);









function combineLatest(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  const {
    args: observables,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.argsArgArrayOrObject)(args);
  if (observables.length === 0) {
    return (0,_from__WEBPACK_IMPORTED_MODULE_2__.from)([], scheduler);
  }
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(combineLatestInit(observables, scheduler, keys ? values => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.createObject)(keys, values) : _util_identity__WEBPACK_IMPORTED_MODULE_5__.identity));
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.mapOneOrManyArgs)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_5__.identity) {
  return subscriber => {
    maybeSchedule(scheduler, () => {
      const {
        length
      } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__.from)(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__.createOperatorSubscriber)(subscriber, value => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.executeSchedule)(subscription, scheduler, execute);
  } else {
    execute();
  }
}

/***/ }),

/***/ 16290:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/empty.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY: () => (/* binding */ EMPTY),
/* harmony export */   empty: () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}

/***/ }),

/***/ 74300:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/forkJoin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forkJoin: () => (/* binding */ forkJoin)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/argsArgArrayOrObject */ 17346);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./innerFrom */ 60384);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 76190);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/OperatorSubscriber */ 35678);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 97825);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/createObject */ 26118);







function forkJoin(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  const {
    args: sources,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.argsArgArrayOrObject)(args);
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    const {
      length
    } = sources;
    if (!length) {
      subscriber.complete();
      return;
    }
    const values = new Array(length);
    let remainingCompletions = length;
    let remainingEmissions = length;
    for (let sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      let hasValue = false;
      (0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.createOperatorSubscriber)(subscriber, value => {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }
        values[sourceIndex] = value;
      }, () => remainingCompletions--, undefined, () => {
        if (!remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? (0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.createObject)(keys, values) : values);
          }
          subscriber.complete();
        }
      }));
    }
  });
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.mapOneOrManyArgs)(resultSelector)) : result;
}

/***/ }),

/***/ 56231:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/from.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   from: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ 15535);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./innerFrom */ 60384);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(input);
}

/***/ }),

/***/ 59016:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromEvent: () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeMap */ 72607);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 97825);






const nodeEventEmitterMethods = ['addListener', 'removeListener'];
const eventTargetMethods = ['addEventListener', 'removeEventListener'];
const jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
  }
  const [add, remove] = isEventTarget(target) ? eventTargetMethods.map(methodName => handler => target[methodName](eventName, handler, options)) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [];
  if (!add) {
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(target)) {
      return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(subTarget => fromEvent(subTarget, eventName, options))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(target));
    }
  }
  if (!add) {
    throw new TypeError('Invalid event target');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const handler = (...args) => subscriber.next(1 < args.length ? args : args[0]);
    add(handler);
    return () => remove(handler);
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return methodName => handler => target[methodName](eventName, handler);
}
function isNodeStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}

/***/ }),

/***/ 60384:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 16929);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 14373);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 84980:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/of.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 76190);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ 56231);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__.from)(args, scheduler);
}

/***/ }),

/***/ 35678:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 58559);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 79736:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/map.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

/***/ }),

/***/ 78164:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeInternals.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeInternals: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

/***/ }),

/***/ 72607:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeMap: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 79736);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ 78164);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 82602);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent));
}

/***/ }),

/***/ 42704:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeOn: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__.executeSchedule)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}

/***/ }),

/***/ 42499:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribeOn: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}

/***/ }),

/***/ 81891:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/switchMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchMap: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}

/***/ }),

/***/ 81527:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/take.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   take: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/empty */ 16290);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__.EMPTY : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

/***/ }),

/***/ 20274:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeUntil: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/noop */ 72707);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 88297:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleArray: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);

function scheduleArray(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

/***/ }),

/***/ 86679:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleAsyncIterable: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

/***/ }),

/***/ 47695:
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleIterable: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12235);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ 82602);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/executeSchedule */ 29701);




function scheduleIterable(input, scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    let iterator;
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
      iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__.iterator]();
      (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__.executeSchedule)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}

/***/ }),

/***/ 35158:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleObservable: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 22147:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schedulePromise: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/observeOn */ 42704);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/subscribeOn */ 42499);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__.observeOn)(scheduler));
}

/***/ }),

/***/ 19405:
/*!*************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduleReadableStreamLike: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

/***/ }),

/***/ 15535:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scheduled: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ 35158);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ 22147);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ 88297);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ 47695);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ 86679);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ 87808);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ 53972);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 31287);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ 19449);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ 95235);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ 42614);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 70401);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ 19405);













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
      return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
      return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
      return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
      return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
      return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}

/***/ }),

/***/ 38411:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 96691:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 14373:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 61558:
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});

/***/ }),

/***/ 30101:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 81566);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 76190:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/args.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popNumber: () => (/* binding */ popNumber),
/* harmony export */   popResultSelector: () => (/* binding */ popResultSelector),
/* harmony export */   popScheduler: () => (/* binding */ popScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScheduler */ 77426);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

/***/ }),

/***/ 17346:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsArgArrayOrObject.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   argsArgArrayOrObject: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}

/***/ }),

/***/ 35559:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 81566:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 26118:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/createObject.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createObject: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}

/***/ }),

/***/ 50575:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 15445);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 29701:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeSchedule: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

/***/ }),

/***/ 10204:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 31287:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 95235:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 82602:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 87808:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 14373);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 19449:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 96691);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 53972:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 70401:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 82602);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 77426:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}

/***/ }),

/***/ 34114:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 82602);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 97825:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/mapOneOrManyArgs.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapOneOrManyArgs: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators/map */ 79736);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__.map)(args => callOrApply(fn, args));
}

/***/ }),

/***/ 72707:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 22476:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 10204);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 16929:
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 15445);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 38411);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 42614:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

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

/***/ 42321:
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

}])
//# sourceMappingURL=apps_fleet_fleet-mfe_src_app_fleet-product_product-overview_product-overview_component_ts.js.map