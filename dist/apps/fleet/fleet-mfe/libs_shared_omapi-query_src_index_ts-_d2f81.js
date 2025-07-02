(self["webpackChunkfleet_mfe"] = self["webpackChunkfleet_mfe"] || []).push([["libs_shared_omapi-query_src_index_ts-_d2f81"],{

/***/ 45528:
/*!**********************************************!*\
  !*** ./libs/shared/omapi-query/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_4__.CacheService),
/* harmony export */   HttpTypesEnum: () => (/* reexport safe */ _lib_enums__WEBPACK_IMPORTED_MODULE_0__.HttpTypesEnum),
/* harmony export */   OmapiQueryCallConfig: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_3__.OmapiQueryCallConfig),
/* harmony export */   OmapiQueryProductMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_2__.OmapiQueryProductMapper),
/* harmony export */   OmapiQueryProductService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_4__.OmapiQueryProductService),
/* harmony export */   OmapiQueryService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_4__.OmapiQueryService),
/* harmony export */   QueryProductInfoTransformer: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_3__.QueryProductInfoTransformer),
/* harmony export */   RawImagesInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.RawImagesInterfaceFactory),
/* harmony export */   rawBigItemVariantInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawBigItemVariantInterfaceFactory),
/* harmony export */   rawColorInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawColorInterfaceFactory),
/* harmony export */   rawLocalizedContentInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawLocalizedContentInterfaceFactory),
/* harmony export */   rawOmapiQueryProductFactoryWithPreOrder: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawOmapiQueryProductFactoryWithPreOrder),
/* harmony export */   rawOmapiQueryProductInterfaceDataFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawOmapiQueryProductInterfaceDataFactory),
/* harmony export */   rawOmapiQueryProductInterfaceDataWithBackOrderFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawOmapiQueryProductInterfaceDataWithBackOrderFactory),
/* harmony export */   rawOmapiQueryProductInterfaceDataWithPreOrderFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawOmapiQueryProductInterfaceDataWithPreOrderFactory),
/* harmony export */   rawOmapiQueryProductTestfactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawOmapiQueryProductTestfactory),
/* harmony export */   rawProductTypeInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawProductTypeInterfaceFactory),
/* harmony export */   rawVariantsInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.rawVariantsInterfaceFactory),
/* harmony export */   variantTagInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.variantTagInterfaceFactory),
/* harmony export */   variantTagOptionInterfaceFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__.variantTagOptionInterfaceFactory)
/* harmony export */ });
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/enums */ 91063);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/interfaces */ 57521);
/* harmony import */ var _lib_mappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/mappers */ 32842);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models */ 89571);
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ 52666);






/***/ }),

/***/ 75157:
/*!***************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/enums/address.enum.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressEnum: () => (/* binding */ AddressEnum)
/* harmony export */ });
var AddressEnum;
(function (AddressEnum) {
  AddressEnum["ADDRESS_NOT_FOUND"] = "OMAPI-ERROR-ADDRESS-NOT-FOUND";
})(AddressEnum || (AddressEnum = {}));

/***/ }),

/***/ 92309:
/*!******************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/enums/http-types.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpTypesEnum: () => (/* binding */ HttpTypesEnum)
/* harmony export */ });
var HttpTypesEnum;
(function (HttpTypesEnum) {
  HttpTypesEnum["POST"] = "POST";
})(HttpTypesEnum || (HttpTypesEnum = {}));

/***/ }),

/***/ 91063:
/*!********************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/enums/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpTypesEnum: () => (/* reexport safe */ _http_types_enum__WEBPACK_IMPORTED_MODULE_0__.HttpTypesEnum)
/* harmony export */ });
/* harmony import */ var _http_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-types.enum */ 92309);


/***/ }),

/***/ 51192:
/*!********************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/enums/product-type.enum.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductTypeEnum: () => (/* binding */ ProductTypeEnum)
/* harmony export */ });
var ProductTypeEnum;
(function (ProductTypeEnum) {
  ProductTypeEnum["SMARTPHONE"] = "SMARTPHONE";
  ProductTypeEnum["SMARTPHONES"] = "SMARTPHONES";
})(ProductTypeEnum || (ProductTypeEnum = {}));

/***/ }),

/***/ 6442:
/*!***********************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/helpers/omapi-query.helper.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryHelper: () => (/* binding */ OmapiQueryHelper)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class OmapiQueryHelper {
  getHttpHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders(this.createHttpHeaders());
  }
  createHttpHeaders() {
    return {
      'Content-Type': 'application/json'
    };
  }
  getHttpOptions() {
    return {
      headers: this.getHttpHeaders()
    };
  }
  static ɵfac = function OmapiQueryHelper_Factory(t) {
    return new (t || OmapiQueryHelper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OmapiQueryHelper,
    factory: OmapiQueryHelper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57521:
/*!*************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/interfaces/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawImagesInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.RawImagesInterfaceFactory),
/* harmony export */   rawBigItemVariantInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawBigItemVariantInterfaceFactory),
/* harmony export */   rawColorInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawColorInterfaceFactory),
/* harmony export */   rawLocalizedContentInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawLocalizedContentInterfaceFactory),
/* harmony export */   rawOmapiQueryProductFactoryWithPreOrder: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawOmapiQueryProductFactoryWithPreOrder),
/* harmony export */   rawOmapiQueryProductInterfaceDataFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawOmapiQueryProductInterfaceDataFactory),
/* harmony export */   rawOmapiQueryProductInterfaceDataWithBackOrderFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawOmapiQueryProductInterfaceDataWithBackOrderFactory),
/* harmony export */   rawOmapiQueryProductInterfaceDataWithPreOrderFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawOmapiQueryProductInterfaceDataWithPreOrderFactory),
/* harmony export */   rawOmapiQueryProductTestfactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawOmapiQueryProductTestfactory),
/* harmony export */   rawProductTypeInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawProductTypeInterfaceFactory),
/* harmony export */   rawVariantsInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.rawVariantsInterfaceFactory),
/* harmony export */   variantTagInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.variantTagInterfaceFactory),
/* harmony export */   variantTagOptionInterfaceFactory: () => (/* reexport safe */ _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.variantTagOptionInterfaceFactory)
/* harmony export */ });
/* harmony import */ var _omapi_query_product_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-query-product.interface */ 70261);
/* harmony import */ var _raw_omapi_query_product_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raw-omapi-query-product.interface */ 87034);
/* harmony import */ var _raw_omapi_query_product_testfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raw-omapi-query-product.testfactory */ 69002);




/***/ }),

/***/ 70261:
/*!*************************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/interfaces/omapi-query-product.interface.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 87034:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/interfaces/raw-omapi-query-product.interface.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 69002:
/*!*******************************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/interfaces/raw-omapi-query-product.testfactory.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawImagesInterfaceFactory: () => (/* binding */ RawImagesInterfaceFactory),
/* harmony export */   rawBigItemVariantInterfaceFactory: () => (/* binding */ rawBigItemVariantInterfaceFactory),
/* harmony export */   rawColorInterfaceFactory: () => (/* binding */ rawColorInterfaceFactory),
/* harmony export */   rawLocalizedContentInterfaceFactory: () => (/* binding */ rawLocalizedContentInterfaceFactory),
/* harmony export */   rawOmapiQueryProductFactoryWithPreOrder: () => (/* binding */ rawOmapiQueryProductFactoryWithPreOrder),
/* harmony export */   rawOmapiQueryProductInterfaceDataFactory: () => (/* binding */ rawOmapiQueryProductInterfaceDataFactory),
/* harmony export */   rawOmapiQueryProductInterfaceDataWithBackOrderFactory: () => (/* binding */ rawOmapiQueryProductInterfaceDataWithBackOrderFactory),
/* harmony export */   rawOmapiQueryProductInterfaceDataWithPreOrderFactory: () => (/* binding */ rawOmapiQueryProductInterfaceDataWithPreOrderFactory),
/* harmony export */   rawOmapiQueryProductTestfactory: () => (/* binding */ rawOmapiQueryProductTestfactory),
/* harmony export */   rawProductTypeInterfaceFactory: () => (/* binding */ rawProductTypeInterfaceFactory),
/* harmony export */   rawVariantsInterfaceFactory: () => (/* binding */ rawVariantsInterfaceFactory),
/* harmony export */   variantTagInterfaceFactory: () => (/* binding */ variantTagInterfaceFactory),
/* harmony export */   variantTagOptionInterfaceFactory: () => (/* binding */ variantTagOptionInterfaceFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const rawLocalizedContentInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  key: '1',
  value: [],
  data: 'test',
  locale: 'nl'
});
const rawProductTypeInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  code: '',
  localizedContent: [rawLocalizedContentInterfaceFactory.build()]
});
const rawColorInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  sortOrder: '',
  localizedContent: [],
  attributeGroup: rawProductTypeInterfaceFactory.build()
});
const variantTagOptionInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  attributeKey: '',
  backOrderDescription: {
    localizedContent: [rawLocalizedContentInterfaceFactory.build()]
  },
  preOrderDescription: {
    localizedContent: [rawLocalizedContentInterfaceFactory.build()]
  }
});
const variantTagInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  telenet: {
    options: [variantTagOptionInterfaceFactory.build()]
  },
  telenetSOHO: {
    options: [variantTagOptionInterfaceFactory.build()]
  },
  base: {
    options: [variantTagOptionInterfaceFactory.build()]
  },
  baseSOHO: {
    options: [variantTagOptionInterfaceFactory.build()]
  }
});
const RawImagesInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  attributeKey: '',
  value: '',
  localizedContent: []
});
const rawVariantsInterfaceFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  productId: '',
  images: [],
  contractMonths: undefined,
  prices: {
    priceType: ''
  },
  color: rawColorInterfaceFactory.build(),
  manBrand: rawColorInterfaceFactory.build(),
  shortDescription: {
    localizedContent: [rawLocalizedContentInterfaceFactory.build()]
  },
  tag: variantTagInterfaceFactory.build(),
  characteristics: undefined
});
const rawBigItemVariantInterfaceFactory = rawVariantsInterfaceFactory.extend({
  extraAtHomeDelivery: true
});
const rawOmapiQueryProductInterfaceDataFactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  labelKey: '',
  productFamily: '',
  variants: [],
  manBrand: rawColorInterfaceFactory.build(),
  isPreOrder: false,
  isBackOrder: false
});
const rawOmapiQueryProductTestfactory = (0,factory_ts__WEBPACK_IMPORTED_MODULE_0__.makeFactory)({
  products: rawOmapiQueryProductInterfaceDataFactory.buildList(2)
});
const rawOmapiQueryProductInterfaceDataWithPreOrderFactory = rawOmapiQueryProductInterfaceDataFactory.extend({
  labelKey: '',
  productFamily: '',
  variants: [rawVariantsInterfaceFactory.build({
    tag: {
      telenet: {
        options: [variantTagOptionInterfaceFactory.build({
          attributeKey: 'pre_order_label'
        })]
      }
    }
  })],
  manBrand: rawColorInterfaceFactory.build(),
  isPreOrder: false,
  isBackOrder: false
});
const rawOmapiQueryProductInterfaceDataWithBackOrderFactory = rawOmapiQueryProductInterfaceDataFactory.extend({
  labelKey: '',
  productFamily: '',
  variants: [rawVariantsInterfaceFactory.build({
    tag: {
      telenet: {
        options: [variantTagOptionInterfaceFactory.build({
          attributeKey: 'back_order_label'
        })]
      }
    }
  })],
  manBrand: rawColorInterfaceFactory.build(),
  isPreOrder: false,
  isBackOrder: false
});
const rawOmapiQueryProductFactoryWithPreOrder = rawOmapiQueryProductTestfactory.extend({
  products: [rawOmapiQueryProductInterfaceDataFactory.build(), rawOmapiQueryProductInterfaceDataWithPreOrderFactory.build()]
});

/***/ }),

/***/ 32842:
/*!**********************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/mappers/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryProductMapper: () => (/* reexport safe */ _omapi_query_product_mapper__WEBPACK_IMPORTED_MODULE_0__.OmapiQueryProductMapper)
/* harmony export */ });
/* harmony import */ var _omapi_query_product_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-query-product.mapper */ 39943);


/***/ }),

/***/ 39943:
/*!*******************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/mappers/omapi-query-product.mapper.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryProductMapper: () => (/* binding */ OmapiQueryProductMapper)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ 57541);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class OmapiQueryProductMapper {
  toModel(rawOmapiQueryProduct) {
    return this.createOmapiQueryProduct(rawOmapiQueryProduct);
  }
  createOmapiQueryProduct(rawOmapiQueryProduct) {
    const omapiQueryProduct = {};
    omapiQueryProduct.products = this.createQueryProducts(rawOmapiQueryProduct.products);
    return omapiQueryProduct;
  }
  createQueryProducts(rawQueryProducts) {
    return rawQueryProducts && rawQueryProducts.map(rawQueryProduct => {
      return this.createQueryProductData(rawQueryProduct);
    });
  }
  createQueryProductData(rawQueryProduct) {
    const queryProduct = {};
    queryProduct.labelKey = rawQueryProduct.labelKey;
    queryProduct.productFamily = rawQueryProduct.productFamily;
    queryProduct.variants = this.createVariants(rawQueryProduct.variants);
    return queryProduct;
  }
  createLocalizedContents(rawLocalizedContents) {
    return rawLocalizedContents && rawLocalizedContents.map(rawLocalizedContent => {
      return OmapiQueryProductMapper.createLocalizedContent(rawLocalizedContent);
    });
  }
  static createLocalizedContent(rawLocalizedContent) {
    const localizedContent = {};
    localizedContent.locale = rawLocalizedContent.locale;
    localizedContent.key = rawLocalizedContent.key;
    localizedContent.data = rawLocalizedContent.data;
    localizedContent.value = OmapiQueryProductMapper.createLocalizedContentValue(rawLocalizedContent.value ? rawLocalizedContent.value : []);
    return localizedContent;
  }
  static createLocalizedContentValue(rawLocalizedContentValue) {
    return rawLocalizedContentValue && rawLocalizedContentValue.map(value => {
      return value;
    });
  }
  createVariants(rawVariants) {
    return rawVariants && rawVariants.map(rawVariant => {
      return this.createVariant(rawVariant);
    });
  }
  createVariant(rawVariant) {
    const variant = {};
    variant.productId = rawVariant.productId;
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_1__["default"])(rawVariant.extraAtHomeDelivery)) {
      variant.extraAtHomeDelivery = rawVariant.extraAtHomeDelivery;
    }
    variant.prices = OmapiQueryProductMapper.createPrices(rawVariant.prices);
    variant.images = this.createImages(rawVariant.images);
    const shortDescription = this.createShortDescription(rawVariant.shortDescription);
    if (shortDescription) {
      variant.shortDescription = shortDescription;
    }
    variant.brand = this.createBrand(rawVariant.manBrand);
    return variant;
  }
  static createPrices(rawPrices) {
    const prices = {};
    prices.priceType = rawPrices.priceType;
    return prices;
  }
  createImages(rawImages) {
    return rawImages && rawImages.map(rawImage => {
      return this.createImage(rawImage);
    });
  }
  createImage(rawImage) {
    const image = {};
    image.attributeKey = rawImage.attributeKey;
    image.value = rawImage.value;
    image.localizedContent = this.createLocalizedContents(rawImage.localizedContent);
    return image;
  }
  createShortDescription(rawShortDescription) {
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawShortDescription) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawShortDescription.localizedContent)) {
      const shortDescription = {};
      shortDescription.localizedContent = this.createLocalizedContents(rawShortDescription.localizedContent);
      return shortDescription;
    }
    return {};
  }
  createBrand(rawBrand) {
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawBrand) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawBrand.localizedContent)) {
      const brand = {};
      brand.localizedContent = this.createLocalizedContents(rawBrand.localizedContent);
      return brand;
    }
    return {};
  }
  static ɵfac = function OmapiQueryProductMapper_Factory(t) {
    return new (t || OmapiQueryProductMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: OmapiQueryProductMapper,
    factory: OmapiQueryProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 89571:
/*!*********************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/models/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryCallConfig: () => (/* reexport safe */ _omapi_query_call_model__WEBPACK_IMPORTED_MODULE_1__.OmapiQueryCallConfig),
/* harmony export */   QueryProductInfoTransformer: () => (/* reexport safe */ _query_product_info_transformer_model__WEBPACK_IMPORTED_MODULE_0__.QueryProductInfoTransformer)
/* harmony export */ });
/* harmony import */ var _query_product_info_transformer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query-product-info-transformer.model */ 66437);
/* harmony import */ var _omapi_query_call_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi-query-call.model */ 76791);



/***/ }),

/***/ 76791:
/*!**************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/models/omapi-query-call.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryCallConfig: () => (/* binding */ OmapiQueryCallConfig)
/* harmony export */ });
/* harmony import */ var _enums_http_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/http-types.enum */ 92309);

class OmapiQueryCallConfig {
  messageGroupName;
  endpoint;
  mapper;
  data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorHandler;
  httpType = _enums_http_types_enum__WEBPACK_IMPORTED_MODULE_0__.HttpTypesEnum.POST;
  // eslint-disable-next-line @typescript-eslint/ban-types
  customHeaders;
  constructor(messageGroupName, endpoint, mapper, data,
  // eslint-disable-next-line @typescript-eslint/ban-types
  customHeaders) {
    this.messageGroupName = messageGroupName;
    this.endpoint = endpoint;
    this.mapper = mapper;
    this.data = data;
    this.customHeaders = customHeaders;
  }
}

/***/ }),

/***/ 66437:
/*!****************************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/models/query-product-info-transformer.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryProductInfoTransformer: () => (/* binding */ QueryProductInfoTransformer)
/* harmony export */ });
/* harmony import */ var _enums_product_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/product-type.enum */ 51192);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 60287);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 57541);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






class QueryProductInfoTransformer {
  languageService;
  constructor(languageService) {
    this.languageService = languageService;
  }
  toModel(queryProductInfo) {
    return this.transformToOmapiProduct(queryProductInfo);
  }
  transformToOmapiProduct(queryProductInfo) {
    const omapiProduct = new _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_2__.OmapiProduct();
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(queryProductInfo.products)) {
      const queryProductDetails = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(queryProductInfo.products);
      if (queryProductDetails) {
        omapiProduct.labelKey = queryProductDetails.labelKey;
        omapiProduct.productType = queryProductDetails.productFamily.toUpperCase() === _enums_product_type_enum__WEBPACK_IMPORTED_MODULE_0__.ProductTypeEnum.SMARTPHONES ? _enums_product_type_enum__WEBPACK_IMPORTED_MODULE_0__.ProductTypeEnum.SMARTPHONE : queryProductDetails.productFamily.toUpperCase();
        if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(queryProductDetails.variants)) {
          this.appendVariantToOmapiProduct(queryProductDetails, omapiProduct);
        }
      }
    }
    return omapiProduct;
  }
  appendVariantToOmapiProduct(queryProductDetails, omapiProduct) {
    const variant = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(queryProductDetails.variants);
    if (variant) {
      if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(variant.extraAtHomeDelivery)) {
        omapiProduct.extraAtHomeDelivery = variant.extraAtHomeDelivery;
      }
      omapiProduct.productId = variant.productId;
      omapiProduct.externalProductCode = variant.productId;
      omapiProduct.priceType = variant.prices.priceType;
      omapiProduct.imageUrl = QueryProductInfoTransformer.getImageUrl(variant);
      const contentForLocale = this.getContentForLocale(variant.shortDescription);
      if (contentForLocale) {
        omapiProduct.name = contentForLocale.data;
      }
      const brandValue = this.getBrandValueForLocale(variant.brand);
      if (brandValue) {
        omapiProduct.brand = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(brandValue.value);
      }
    }
  }
  static getImageUrl(variant) {
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(variant) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(variant.images)) {
      const imageDetails = (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(variant.images);
      return imageDetails ? imageDetails.value : '';
    }
    return '';
  }
  getContentForLocale(shortDescription) {
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(shortDescription) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(shortDescription.localizedContent)) {
      const localizedContentInterface = shortDescription.localizedContent.find(localizeContent => {
        return localizeContent.locale === this.languageService.getLanguage();
      });
      return localizedContentInterface ? localizedContentInterface : {};
    }
    return {};
  }
  getBrandValueForLocale(brand) {
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(brand) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(brand.localizedContent)) {
      const localizedContentInterface = brand.localizedContent.find(localizedContent => {
        return localizedContent.locale === this.languageService.getLanguage();
      });
      return localizedContentInterface ? localizedContentInterface : {};
    }
    return {};
  }
  static ɵfac = function QueryProductInfoTransformer_Factory(t) {
    return new (t || QueryProductInfoTransformer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LanguageService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: QueryProductInfoTransformer,
    factory: QueryProductInfoTransformer.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19720:
/*!*************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/services/cache/cache.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 21650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class CacheService {
  cache = {};
  get(key) {
    return this.cache[key];
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  add(key, response$) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.cache[key] = response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)({
      bufferSize: 1
    }));
  }
  remove(key) {
    delete this.cache[key];
  }
  static ɵfac = function CacheService_Factory(t) {
    return new (t || CacheService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CacheService,
    factory: CacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 52666:
/*!***********************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/services/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* reexport safe */ _cache_cache_service__WEBPACK_IMPORTED_MODULE_2__.CacheService),
/* harmony export */   OmapiQueryProductService: () => (/* reexport safe */ _omapi_query_product_service__WEBPACK_IMPORTED_MODULE_0__.OmapiQueryProductService),
/* harmony export */   OmapiQueryService: () => (/* reexport safe */ _omapi_query_service__WEBPACK_IMPORTED_MODULE_1__.OmapiQueryService)
/* harmony export */ });
/* harmony import */ var _omapi_query_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-query-product.service */ 87032);
/* harmony import */ var _omapi_query_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi-query.service */ 60414);
/* harmony import */ var _cache_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache/cache.service */ 19720);




/***/ }),

/***/ 87032:
/*!*********************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/services/omapi-query-product.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryProductService: () => (/* binding */ OmapiQueryProductService)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 74300);
/* harmony import */ var _cache_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache/cache.service */ 19720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);













class OmapiQueryProductService {
  http;
  cacheService;
  urlService;
  messageService;
  log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_4__.LogFactory.createLogger(OmapiQueryProductService);
  constructor(http, cacheService, urlService, messageService) {
    this.http = http;
    this.cacheService = cacheService;
    this.urlService = urlService;
    this.messageService = messageService;
  }
  getRawQueryProductByEndpoint(messageGroup, endpoint) {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
    }
    return this.cacheService.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => this.handleError(error, messageGroup)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(response => response));
  }
  rawQueryProductsFromEndpoints$(messageGroup, endpoints) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(endpoints, endpoint => this.getRawQueryProductByEndpoint(messageGroup, endpoint)));
  }
  getHttpConfig() {
    return {
      headers: {
        'x-alt-referer': this.urlService.getCurrentUrl(),
        'X-Requested-With': 'XMLHttpRequest'
      },
      timeout: 10000,
      cache: true
    };
  }
  handleError(error, messageGroup) {
    if (error.status !== 410) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage(messageGroup, 'omapi-query-' + error.status));
    }
    this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
    throw Error('An error occurred while trying to fetch ' + messageGroup);
  }
  static ɵfac = function OmapiQueryProductService_Factory(t) {
    return new (t || OmapiQueryProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: OmapiQueryProductService,
    factory: OmapiQueryProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 60414:
/*!*************************************************************************!*\
  !*** ./libs/shared/omapi-query/src/lib/services/omapi-query.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiQueryService: () => (/* binding */ OmapiQueryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 72607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var _helpers_omapi_query_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/omapi-query.helper */ 6442);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _enums_address_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums/address.enum */ 75157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);














class OmapiQueryService {
  http;
  configService;
  messageService;
  omapiQueryHelper;
  omapiEnrichService;
  constructor(http, configService, messageService, omapiQueryHelper, omapiEnrichService) {
    this.http = http;
    this.configService = configService;
    this.messageService = messageService;
    this.omapiQueryHelper = omapiQueryHelper;
    this.omapiEnrichService = omapiEnrichService;
  }
  doPost(omapiQueryCallConfig) {
    return this.doRequest(omapiQueryCallConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(omapiQueryResponse => {
      return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(omapiQueryResponseEnrichedWithOmapiData => {
      return omapiQueryCallConfig.mapper.toModel(omapiQueryResponseEnrichedWithOmapiData);
    }));
  }
  doGet(omapiQueryCallConfig) {
    return this.http.get(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCallConfig.endpoint).pipe(
    // eslint-disable-next-line @typescript-eslint/ban-types
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(omapiQueryResponse => {
      return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(omapiResponseEnrichedWithOmapiData => omapiQueryCallConfig.mapper.toModel(omapiResponseEnrichedWithOmapiData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      return this.handleError(error, omapiQueryCallConfig);
    }));
  }
  doRequest(omapiQueryCall) {
    const options = this.omapiQueryHelper.getHttpOptions();
    return this.http.post(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCall.endpoint, omapiQueryCall.data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
      return this.handleError(error, omapiQueryCall);
    }));
  }
  handleError(error, omapiQueryCall) {
    if (omapiQueryCall.errorHandler !== undefined) {
      return omapiQueryCall.errorHandler(error, omapiQueryCall);
    }
    let errorCode = 'omapi-query.'.concat(error.status.toString());
    let detailedErrorCode;
    switch (error.status) {
      case 400:
        errorCode = _enums_address_enum__WEBPACK_IMPORTED_MODULE_5__.AddressEnum.ADDRESS_NOT_FOUND ? `${omapiQueryCall.messageGroupName}.${_enums_address_enum__WEBPACK_IMPORTED_MODULE_5__.AddressEnum.ADDRESS_NOT_FOUND}` : errorCode;
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
      case 500:
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
      default:
        detailedErrorCode = this.getDetailedErrorCode(error, errorCode);
        if (detailedErrorCode) {
          errorCode = detailedErrorCode;
        }
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => 'An error occured while trying to fetch ' + omapiQueryCall.messageGroupName + ' | ' + errorCode);
  }
  getDetailedErrorCode(error, errorCode) {
    if (error.error && error.error.code) {
      return errorCode.concat('-').concat(error.error.code);
    }
    return undefined;
  }
  static ɵfac = function OmapiQueryService_Factory(t) {
    return new (t || OmapiQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_helpers_omapi_query_helper__WEBPACK_IMPORTED_MODULE_3__.OmapiQueryHelper), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_4__.OmapiEnrichService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: OmapiQueryService,
    factory: OmapiQueryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99199:
/*!******************************************!*\
  !*** ./node_modules/clone-deep/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/**
 * Module dependenices
 */
const clone = __webpack_require__(/*! shallow-clone */ 92751);
const typeOf = __webpack_require__(/*! kind-of */ 46030);
const isPlainObject = __webpack_require__(/*! is-plain-object */ 87680);
function cloneDeep(val, instanceClone) {
  switch (typeOf(val)) {
    case 'object':
      return cloneObjectDeep(val, instanceClone);
    case 'array':
      return cloneArrayDeep(val, instanceClone);
    default:
      {
        return clone(val);
      }
  }
}
function cloneObjectDeep(val, instanceClone) {
  if (typeof instanceClone === 'function') {
    return instanceClone(val);
  }
  if (instanceClone || isPlainObject(val)) {
    const res = new val.constructor();
    for (let key in val) {
      res[key] = cloneDeep(val[key], instanceClone);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val, instanceClone) {
  const res = new val.constructor(val.length);
  for (let i = 0; i < val.length; i++) {
    res[i] = cloneDeep(val[i], instanceClone);
  }
  return res;
}

/**
 * Expose `cloneDeep`
 */

module.exports = cloneDeep;

/***/ }),

/***/ 82015:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/async.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryFromSync = exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.TransformFactory = exports.Factory = exports.Derived = exports.Generator = exports.lift = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const Sync = __webpack_require__(/*! ./sync */ 77109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
function isPromise(t) {
  return !!t && typeof t["then"] === "function";
}
function lift(t) {
  if (isPromise(t)) {
    return t;
  } else {
    return Promise.resolve(t);
  }
}
exports.lift = lift;
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return lift(this.func(seq));
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    return lift(this.func(owner, seq));
  }
}
exports.Derived = Derived;
class Factory {
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      return this.buildInner(null, item);
    });
    this.buildInner = (buildKeys, item) => __awaiter(this, void 0, void 0, function* () {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = yield buildBase(seqNum, this.builder);
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = yield der.derived.build(v, seqNum);
      }
      return lift(v);
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const ts = Array(count); // allocate to correct size
      // don't run in parallel, so that seq num works predictably
      for (let i = 0; i < count; i++) {
        ts[i] = yield this.build(item);
      }
      return ts;
    });
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = Object.assign({}, this.builder, def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = Object.assign({}, this.builder, other.builder);
    return new Factory(builder, this.config);
  }
  transform(fn) {
    return new TransformFactory(this, fn);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => __awaiter(this, void 0, void 0, function* () {
      delete v2[kOut];
      const origValue = (yield this.buildInner([kOut], v2))[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    }));
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
class TransformFactory {
  constructor(inner, transform) {
    this.inner = inner;
    this.transform = transform;
    this.build = item => __awaiter(this, void 0, void 0, function* () {
      const v = yield this.inner.build(item);
      const u = yield lift(this.transform(v));
      return u;
    });
    this.buildList = (count, item) => __awaiter(this, void 0, void 0, function* () {
      const vs = yield this.inner.buildList(count, item);
      return Promise.all(vs.map(this.transform).map(lift));
    });
  }
}
exports.TransformFactory = TransformFactory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  return __awaiter(this, void 0, void 0, function* () {
    const resolvedBuilder = yield lift(builder);
    const t = {};
    const keys = Object.getOwnPropertyNames(resolvedBuilder);
    const derived = [];
    for (const key of keys) {
      const v = resolvedBuilder[key];
      let value = v;
      if (!!v && typeof v === "object") {
        if (isPromise(v)) {
          value = yield v;
        } else if (v.constructor === Generator) {
          value = yield v.build(seqNum);
        } else if (v.constructor == Derived) {
          derived.push({
            key,
            derived: v
          });
        } else if (v.constructor === Sync.Generator) {
          value = v.build(seqNum);
        } else if (v.constructor == Sync.Derived) {
          derived.push({
            key,
            derived: new Derived(v.func)
          });
        } else {
          value = cloneDeep(v);
        }
      }
      t[key] = value;
    }
    return {
      value: t,
      derived
    };
  });
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;
function makeFactoryFromSync(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryFromSync = makeFactoryFromSync;

/***/ }),

/***/ 46032:
/*!**********************************************!*\
  !*** ./node_modules/factory.ts/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = exports.Pipeline = exports.Sync = exports.Async = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
exports.Async = Async;
const Sync = __webpack_require__(/*! ./sync */ 77109);
exports.Sync = Sync;
const Pipeline = __webpack_require__(/*! ./pipeline */ 8983);
exports.Pipeline = Pipeline;
// for now, for backwards compat
var sync_1 = __webpack_require__(/*! ./sync */ 77109);
Object.defineProperty(exports, "Generator", ({
  enumerable: true,
  get: function () {
    return sync_1.Generator;
  }
}));
Object.defineProperty(exports, "Derived", ({
  enumerable: true,
  get: function () {
    return sync_1.Derived;
  }
}));
Object.defineProperty(exports, "Factory", ({
  enumerable: true,
  get: function () {
    return sync_1.Factory;
  }
}));
Object.defineProperty(exports, "val", ({
  enumerable: true,
  get: function () {
    return sync_1.val;
  }
}));
Object.defineProperty(exports, "each", ({
  enumerable: true,
  get: function () {
    return sync_1.each;
  }
}));
Object.defineProperty(exports, "makeFactory", ({
  enumerable: true,
  get: function () {
    return sync_1.makeFactory;
  }
}));

/***/ }),

/***/ 8983:
/*!*************************************************!*\
  !*** ./node_modules/factory.ts/lib/pipeline.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Pipeline = void 0;
const Async = __webpack_require__(/*! ./async */ 82015);
class Pipeline {
  constructor(current) {
    this.current = current;
  }
  static start() {
    return new Pipeline(Promise.resolve({}));
  }
  //add<T,U>(factory: Async.IFactory<T,U> | Async.FactoryFunc<T,U>, val: Parti (p:P) => Partial<T>)
  addValues(val) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const v = typeof val === "function" ? yield Async.lift(val(c)) : val;
      return Object.assign(Object.assign({}, c), v);
    })));
  }
  // NOTE: want to combine all addFactory() methods, but
  // Typescript and or ts-node seems to have problems
  // also want use object { key: partial } instead
  // but can't get the types right
  addFactoryFunc(factory, key, partial) {
    return new Pipeline(this.current.then(c => __awaiter(this, void 0, void 0, function* () {
      const p = typeof partial === "function" ? yield Async.lift(partial(c)) : partial;
      const val = yield factory(p);
      const newV = {};
      newV[key] = val;
      return Object.assign(Object.assign({}, c), newV);
    })));
  }
  addFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  addTxFactory(factory, key, partial) {
    return this.addFactoryFunc(v => factory.build(v), key, partial);
  }
  then(onfulfilled, onrejected) {
    return this.current.then(onfulfilled, onrejected);
  }
  toFactory() {
    return Async.makeFactory(this.current);
  }
}
exports.Pipeline = Pipeline;

/***/ }),

/***/ 56109:
/*!***********************************************!*\
  !*** ./node_modules/factory.ts/lib/shared.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.uniq = exports.recursivePartialOverride = void 0;
function recursivePartialOverride(x, y) {
  if (y === undefined || y === null) return x;
  const objProto = Object.getPrototypeOf({});
  if (Object.getPrototypeOf(y) != objProto) return y;
  let v = Object.assign({}, x);
  let yKeys = Object.keys(y);
  const allKeys = uniq(Object.keys(v).concat(yKeys));
  for (const key of allKeys) {
    if (yKeys.indexOf(key) >= 0) {
      const itemKeyVal = y[key];
      if (null != itemKeyVal && typeof itemKeyVal === "object") {
        const baseKeyVal = v[key];
        v[key] = recursivePartialOverride(baseKeyVal, itemKeyVal);
      } else {
        v[key] = itemKeyVal;
      }
    }
  }
  return v;
}
exports.recursivePartialOverride = recursivePartialOverride;
function uniq(ts) {
  const out = [];
  for (const v of ts) {
    if (out.indexOf(v) < 0) {
      out.push(v);
    }
  }
  return out;
}
exports.uniq = uniq;

/***/ }),

/***/ 77109:
/*!*********************************************!*\
  !*** ./node_modules/factory.ts/lib/sync.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.makeFactoryWithRequired = exports.makeFactory = exports.each = exports.val = exports.Factory = exports.Derived = exports.Generator = void 0;
const shared_1 = __webpack_require__(/*! ./shared */ 56109);
const cloneDeep = __webpack_require__(/*! clone-deep */ 99199);
class Generator {
  constructor(func) {
    this.func = func;
  }
  build(seq) {
    return this.func(seq);
  }
}
exports.Generator = Generator;
class Derived {
  constructor(func) {
    this.func = func;
  }
  build(owner, seq) {
    const ret = this.func(owner, seq);
    return ret;
  }
}
exports.Derived = Derived;
class Factory {
  expandBuilder() {
    return typeof this.builder === "function" ? this.builder() : this.builder;
  }
  constructor(builder, config) {
    this.builder = builder;
    this.config = config;
    this.getStartingSequenceNumber = () => this.config && this.config.startingSequenceNumber || 0;
    this.build = item => {
      return this.buildInner(null, item);
    };
    this.buildInner = (buildKeys, item) => {
      const seqNum = this.seqNum;
      this.seqNum++;
      const base = buildBase(seqNum, this.expandBuilder());
      let v = Object.assign({}, base.value); //, item);
      if (item) {
        v = (0, shared_1.recursivePartialOverride)(v, item);
      }
      const directlySpecifiedKeys = Object.keys(item || {});
      if (!buildKeys) {
        buildKeys = base.derived.map(d => d.key);
      }
      for (const der of base.derived) {
        if (!buildKeys.includes(der.key)) {
          // console.log(`skip unspecified build key ${der.key}`);
          continue;
        }
        if (directlySpecifiedKeys.includes(der.key)) {
          // console.log(`skip explicitly defined build key ${der.key}`);
          continue;
        }
        v[der.key] = der.derived.build(v, seqNum);
      }
      return v;
    };
    this.buildList = (count, item) => {
      const ts = Array(count); // allocate to correct size
      for (let i = 0; i < count; i++) {
        ts[i] = this.build(item);
      }
      return ts;
    };
    this.seqNum = this.getStartingSequenceNumber();
  }
  resetSequenceNumber(newSequenceNumber) {
    this.seqNum = newSequenceNumber ? newSequenceNumber : this.getStartingSequenceNumber();
  }
  extend(def) {
    const builder = () => Object.assign({}, this.expandBuilder(), def);
    return new Factory(builder, this.config);
  }
  combine(other) {
    const builder = () => Object.assign({}, this.expandBuilder(), other.expandBuilder());
    return new Factory(builder, this.config);
  }
  withSelfDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((v2, seq) => {
      delete v2[kOut];
      const origValue = this.buildInner([kOut], v2)[kOut];
      v2[kOut] = origValue;
      return f(v2, seq);
    });
    return this.extend(partial);
  }
  withDerivation(kOut, f) {
    const partial = {};
    partial[kOut] = new Derived(f);
    return this.extend(partial);
  }
  withDerivation1(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], i));
    return this.extend(partial);
  }
  withDerivation2(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], i));
    return this.extend(partial);
  }
  withDerivation3(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], i));
    return this.extend(partial);
  }
  withDerivation4(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], i));
    return this.extend(partial);
  }
  withDerivation5(kInput, kOut, f) {
    const partial = {};
    partial[kOut] = new Derived((t, i) => f(t[kInput[0]], t[kInput[1]], t[kInput[2]], t[kInput[3]], t[kInput[4]], i));
    return this.extend(partial);
  }
}
exports.Factory = Factory;
function val(val) {
  return new Generator(() => val);
}
exports.val = val;
function each(f) {
  return new Generator(f);
}
exports.each = each;
function buildBase(seqNum, builder) {
  const t = {};
  const keys = Object.getOwnPropertyNames(builder);
  const derived = [];
  for (const key of keys) {
    const v = builder[key];
    let value = v;
    if (!!v && typeof v === "object") {
      if (v.constructor === Generator) {
        value = v.build(seqNum);
      } else if (v.constructor == Derived) {
        derived.push({
          key,
          derived: v
        });
      } else {
        value = cloneDeep(v);
      }
    }
    t[key] = value;
  }
  return {
    value: t,
    derived
  };
}
function makeFactory(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactory = makeFactory;
function makeFactoryWithRequired(builder, config) {
  return new Factory(builder, config);
}
exports.makeFactoryWithRequired = makeFactoryWithRequired;

/***/ }),

/***/ 87680:
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ 6859);
function isObjectObject(o) {
  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
}
module.exports = function isPlainObject(o) {
  var ctor, prot;
  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};

/***/ }),

/***/ 6859:
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/***/ ((module) => {

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

/***/ }),

/***/ 46030:
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = Object.prototype.toString;
module.exports = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }
  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';
  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';
    case 'Promise':
      return 'promise';

    // Set, Map, WeakSet, WeakMap
    case 'WeakMap':
      return 'weakmap';
    case 'WeakSet':
      return 'weakset';
    case 'Map':
      return 'map';
    case 'Set':
      return 'set';

    // 8-bit typed arrays
    case 'Int8Array':
      return 'int8array';
    case 'Uint8Array':
      return 'uint8array';
    case 'Uint8ClampedArray':
      return 'uint8clampedarray';

    // 16-bit typed arrays
    case 'Int16Array':
      return 'int16array';
    case 'Uint16Array':
      return 'uint16array';

    // 32-bit typed arrays
    case 'Int32Array':
      return 'int32array';
    case 'Uint32Array':
      return 'uint32array';
    case 'Float32Array':
      return 'float32array';
    case 'Float64Array':
      return 'float64array';
  }
  if (isGeneratorObj(val)) {
    return 'generator';
  }

  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators
    case '[object Map Iterator]':
      return 'mapiterator';
    case '[object Set Iterator]':
      return 'setiterator';
    case '[object String Iterator]':
      return 'stringiterator';
    case '[object Array Iterator]':
      return 'arrayiterator';
  }

  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};
function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}
function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}
function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}
function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}
function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}
function isGeneratorObj(val) {
  return typeof val.throw === 'function' && typeof val.return === 'function' && typeof val.next === 'function';
}
function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

/***/ }),

/***/ 55400:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 72513);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 26926);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
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

/***/ 2389:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/catchError.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   catchError: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 35678);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 34114);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
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

/***/ 85584:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/share.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   share: () => (/* binding */ share)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/innerFrom */ 60384);
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 72513);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 58559);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 34114);




function share(options = {}) {
  const {
    connector = () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject(),
    resetOnError = true,
    resetOnComplete = true,
    resetOnRefCountZero = true
  } = options;
  return wrapperSource => {
    let connection;
    let resetConnection;
    let subject;
    let refCount = 0;
    let hasCompleted = false;
    let hasErrored = false;
    const cancelReset = () => {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = undefined;
    };
    const reset = () => {
      cancelReset();
      connection = subject = undefined;
      hasCompleted = hasErrored = false;
    };
    const resetAndUnsubscribe = () => {
      const conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      const dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(() => {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
          next: value => dest.next(value),
          error: err => {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: () => {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on, ...args) {
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  const onSubscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.SafeSubscriber({
    next: () => {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.innerFrom)(on(...args)).subscribe(onSubscriber);
}

/***/ }),

/***/ 21650:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 55400);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 85584);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
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

/***/ 26926:
/*!********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

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

/***/ 92751:
/*!*********************************************!*\
  !*** ./node_modules/shallow-clone/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const valueOf = Symbol.prototype.valueOf;
const typeOf = __webpack_require__(/*! kind-of */ 46030);
function clone(val, deep) {
  switch (typeOf(val)) {
    case 'array':
      return val.slice();
    case 'object':
      return Object.assign({}, val);
    case 'date':
      return new val.constructor(Number(val));
    case 'map':
      return new Map(val);
    case 'set':
      return new Set(val);
    case 'buffer':
      return cloneBuffer(val);
    case 'symbol':
      return cloneSymbol(val);
    case 'arraybuffer':
      return cloneArrayBuffer(val);
    case 'float32array':
    case 'float64array':
    case 'int16array':
    case 'int32array':
    case 'int8array':
    case 'uint16array':
    case 'uint32array':
    case 'uint8clampedarray':
    case 'uint8array':
      return cloneTypedArray(val);
    case 'regexp':
      return cloneRegExp(val);
    case 'error':
      return Object.create(val);
    default:
      {
        return val;
      }
  }
}
function cloneRegExp(val) {
  const flags = val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
  const re = new val.constructor(val.source, flags);
  re.lastIndex = val.lastIndex;
  return re;
}
function cloneArrayBuffer(val) {
  const res = new val.constructor(val.byteLength);
  new Uint8Array(res).set(new Uint8Array(val));
  return res;
}
function cloneTypedArray(val, deep) {
  return new val.constructor(val.buffer, val.byteOffset, val.length);
}
function cloneBuffer(val) {
  const len = val.length;
  const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
  val.copy(buf);
  return buf;
}
function cloneSymbol(val) {
  return valueOf ? Object(valueOf.call(val)) : {};
}

/**
 * Expose `clone`
 */

module.exports = clone;

/***/ }),

/***/ 60287:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/head.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return array && array.length ? array[0] : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (head);

/***/ }),

/***/ 57541:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/isNil.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNil);

/***/ }),

/***/ 3715:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/map.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ 64987);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseMap.js */ 10650);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseMap_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);

/***/ })

}])
//# sourceMappingURL=libs_shared_omapi-query_src_index_ts-_d2f81.js.map