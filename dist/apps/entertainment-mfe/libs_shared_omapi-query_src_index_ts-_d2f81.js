(self["webpackChunkentertainment_mfe"] = self["webpackChunkentertainment_mfe"] || []).push([["libs_shared_omapi-query_src_index_ts-_d2f81"],{

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class CacheService {
  cache = {};
  get(key) {
    return this.cache[key];
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  add(key, response$) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.cache[key] = response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.shareReplay)({
      bufferSize: 1
    }));
  }
  remove(key) {
    delete this.cache[key];
  }
  static ɵfac = function CacheService_Factory(t) {
    return new (t || CacheService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cache_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache/cache.service */ 19720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_7__);













class OmapiQueryProductService {
  http;
  cacheService;
  urlService;
  messageService;
  log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_6__.LogFactory.createLogger(OmapiQueryProductService);
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
    return this.cacheService.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => this.handleError(error, messageGroup)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => response));
  }
  rawQueryProductsFromEndpoints$(messageGroup, endpoints) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(endpoints, endpoint => this.getRawQueryProductByEndpoint(messageGroup, endpoint)));
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
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage(messageGroup, 'omapi-query-' + error.status));
    }
    this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
    throw Error('An error occurred while trying to fetch ' + messageGroup);
  }
  static ɵfac = function OmapiQueryProductService_Factory(t) {
    return new (t || OmapiQueryProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__.CacheService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.MessageService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_omapi_query_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/omapi-query.helper */ 6442);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enums_address_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../enums/address.enum */ 75157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);














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
    return this.doRequest(omapiQueryCallConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(omapiQueryResponse => {
      return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(omapiQueryResponseEnrichedWithOmapiData => {
      return omapiQueryCallConfig.mapper.toModel(omapiQueryResponseEnrichedWithOmapiData);
    }));
  }
  doGet(omapiQueryCallConfig) {
    return this.http.get(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCallConfig.endpoint).pipe(
    // eslint-disable-next-line @typescript-eslint/ban-types
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(omapiQueryResponse => {
      return this.omapiEnrichService.enrichResponseWithOmapiData(omapiQueryCallConfig.messageGroupName, omapiQueryResponse);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(omapiResponseEnrichedWithOmapiData => omapiQueryCallConfig.mapper.toModel(omapiResponseEnrichedWithOmapiData)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      return this.handleError(error, omapiQueryCallConfig);
    }));
  }
  doRequest(omapiQueryCall) {
    const options = this.omapiQueryHelper.getHttpOptions();
    return this.http.post(this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.OMAPI_QUERY_URL) + omapiQueryCall.endpoint, omapiQueryCall.data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
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
        errorCode = _enums_address_enum__WEBPACK_IMPORTED_MODULE_7__.AddressEnum.ADDRESS_NOT_FOUND ? `${omapiQueryCall.messageGroupName}.${_enums_address_enum__WEBPACK_IMPORTED_MODULE_7__.AddressEnum.ADDRESS_NOT_FOUND}` : errorCode;
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
      case 500:
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
      default:
        detailedErrorCode = this.getDetailedErrorCode(error, errorCode);
        if (detailedErrorCode) {
          errorCode = detailedErrorCode;
        }
        this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage(omapiQueryCall.messageGroupName, errorCode));
        break;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => 'An error occured while trying to fetch ' + omapiQueryCall.messageGroupName + ' | ' + errorCode);
  }
  getDetailedErrorCode(error, errorCode) {
    if (error.error && error.error.code) {
      return errorCode.concat('-').concat(error.error.code);
    }
    return undefined;
  }
  static ɵfac = function OmapiQueryService_Factory(t) {
    return new (t || OmapiQueryService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_helpers_omapi_query_helper__WEBPACK_IMPORTED_MODULE_5__.OmapiQueryHelper), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_6__.OmapiEnrichService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: OmapiQueryService,
    factory: OmapiQueryService.ɵfac,
    providedIn: 'root'
  });
}

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

/***/ })

}])
//# sourceMappingURL=libs_shared_omapi-query_src_index_ts-_d2f81.js.map