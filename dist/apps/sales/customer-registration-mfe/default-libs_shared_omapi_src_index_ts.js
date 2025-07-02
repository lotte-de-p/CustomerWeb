(self["webpackChunkcustomer_registration_mfe"] = self["webpackChunkcustomer_registration_mfe"] || []).push([["default-libs_shared_omapi_src_index_ts"],{

/***/ 70654:
/*!****************************************!*\
  !*** ./libs/shared/omapi/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharsEnum: () => (/* reexport safe */ _lib_enums__WEBPACK_IMPORTED_MODULE_1__.CharsEnum),
/* harmony export */   LanguageEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.LanguageEnum),
/* harmony export */   OmapiCacheService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_5__.OmapiCacheService),
/* harmony export */   OmapiCharacteristicEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum),
/* harmony export */   OmapiConstituentType: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiConstituentType),
/* harmony export */   OmapiDarwinProducts: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiDarwinProducts),
/* harmony export */   OmapiEnrichService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_5__.OmapiEnrichService),
/* harmony export */   OmapiFamilyConstants: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiFamilyConstants),
/* harmony export */   OmapiFamilyProductType: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiFamilyProductType),
/* harmony export */   OmapiFamilyService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_5__.OmapiFamilyService),
/* harmony export */   OmapiFamilyTierEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiFamilyTierEnum),
/* harmony export */   OmapiFamilyUtils: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_6__.OmapiFamilyUtils),
/* harmony export */   OmapiLegacyProducts: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiLegacyProducts),
/* harmony export */   OmapiPremium: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_4__.OmapiPremium),
/* harmony export */   OmapiPremiumMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_3__.OmapiPremiumMapper),
/* harmony export */   OmapiPremiumService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_5__.OmapiPremiumService),
/* harmony export */   OmapiProduct: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_4__.OmapiProduct),
/* harmony export */   OmapiProductGroupEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiProductGroupEnum),
/* harmony export */   OmapiProductMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_3__.OmapiProductMapper),
/* harmony export */   OmapiProductService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_5__.OmapiProductService),
/* harmony export */   OmapiProductSubGroupEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiProductSubGroupEnum),
/* harmony export */   OmapiProductTestfactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_4__.OmapiProductTestfactory),
/* harmony export */   OmapiProductTierEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiProductTierEnum),
/* harmony export */   OmapiProductType: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiProductType),
/* harmony export */   OmapiServiceSpecificationLabelKey: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiServiceSpecificationLabelKey),
/* harmony export */   OmapiServiceType: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiServiceType),
/* harmony export */   OmapiSubCategoryEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiSubCategoryEnum),
/* harmony export */   OmapiUtils: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_6__.OmapiUtils),
/* harmony export */   ProductCharacteristicEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.ProductCharacteristicEnum),
/* harmony export */   ProductConstants: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.ProductConstants),
/* harmony export */   ProductPriceTypeEnum: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.ProductPriceTypeEnum),
/* harmony export */   SofyComboProducts: () => (/* reexport safe */ _lib_constants__WEBPACK_IMPORTED_MODULE_0__.SofyComboProducts),
/* harmony export */   omapiConnectFiveFamily: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiConnectFiveFamily),
/* harmony export */   omapiFamilyFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiFamilyFactory),
/* harmony export */   omapiFamilyOptinFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiFamilyOptinFactory),
/* harmony export */   omapiFamilyOptionFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiFamilyOptionFactory),
/* harmony export */   omapiFamilyTierFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiFamilyTierFactory),
/* harmony export */   omapiKlikFamily: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiKlikFamily),
/* harmony export */   omapiMobileDataFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiMobileDataFactory),
/* harmony export */   omapiProductInfoFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.omapiProductInfoFactory),
/* harmony export */   rawOmapiProductTestFactory: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__.rawOmapiProductTestFactory)
/* harmony export */ });
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants */ 44610);
/* harmony import */ var _lib_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/enums */ 8229);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces */ 75819);
/* harmony import */ var _lib_mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/mappers */ 29170);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models */ 51562);
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services */ 55270);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils */ 28253);








/***/ }),

/***/ 93647:
/*!*************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/fiber-products.constants.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiberProducts: () => (/* binding */ FiberProducts)
/* harmony export */ });
const FiberProducts = ['INTF0201', 'YUP10004', 'INTF0203', 'YUP10005', 'FREU0001', 'FRPH0001', 'TWOP0017', 'TWOP0015', 'WIGO1000', 'YUPW1000', 'WIGO1001', 'YUPW1001', 'WIGO1004', 'WIGO1006', 'YUPW1006', 'WIGO1009', 'YUPW1009', 'TWOP0016', 'YUP2P005', 'TWOP0014', 'YUP2P006', 'WIGO1015', 'YUPW1015', 'WIGO1025', 'WIGO1040', 'YUPW1040', 'WIGO10S3', 'YUPW10S3', 'WIGU1001', 'YUP2P007', 'C5FA0011', 'C5FA0012', 'C5FA0013', 'C5FA0014', 'C5FA0015', 'YUPC5021', 'YUPC5022', 'YUPC5023', 'YUPC5024', 'YUPC5025', 'C5FU0011', 'C5FU0012', 'C5FU0013', 'C5FU0014', 'C5FU0015', 'YUPC5026', 'YUPC5027', 'YUPC5028', 'YUPC5029', 'YUPC5030', 'BINT0005', 'BINT0006', 'DITV0103', 'FREU0101', 'BUND0113', 'BUND0114', 'KLIK0008', 'KLIK0009', 'KLIK0010', 'KLIK0011', 'KLIK0012', 'KLIK0013', 'KLIK0014', 'KLIK0009'];

/***/ }),

/***/ 44610:
/*!******************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageEnum: () => (/* reexport safe */ _language_enum__WEBPACK_IMPORTED_MODULE_3__.LanguageEnum),
/* harmony export */   OmapiCharacteristicEnum: () => (/* reexport safe */ _omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_1__.OmapiCharacteristicEnum),
/* harmony export */   OmapiConstituentType: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiConstituentType),
/* harmony export */   OmapiDarwinProducts: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiDarwinProducts),
/* harmony export */   OmapiFamilyConstants: () => (/* reexport safe */ _omapi_family_constants__WEBPACK_IMPORTED_MODULE_2__.OmapiFamilyConstants),
/* harmony export */   OmapiFamilyProductType: () => (/* reexport safe */ _omapi_family_constants__WEBPACK_IMPORTED_MODULE_2__.OmapiFamilyProductType),
/* harmony export */   OmapiFamilyTierEnum: () => (/* reexport safe */ _omapi_family_constants__WEBPACK_IMPORTED_MODULE_2__.OmapiFamilyTierEnum),
/* harmony export */   OmapiLegacyProducts: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiLegacyProducts),
/* harmony export */   OmapiProductGroupEnum: () => (/* reexport safe */ _omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_1__.OmapiProductGroupEnum),
/* harmony export */   OmapiProductSubGroupEnum: () => (/* reexport safe */ _omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_1__.OmapiProductSubGroupEnum),
/* harmony export */   OmapiProductTierEnum: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiProductTierEnum),
/* harmony export */   OmapiProductType: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiProductType),
/* harmony export */   OmapiServiceSpecificationLabelKey: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiServiceSpecificationLabelKey),
/* harmony export */   OmapiServiceType: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiServiceType),
/* harmony export */   OmapiSubCategoryEnum: () => (/* reexport safe */ _omapi_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiSubCategoryEnum),
/* harmony export */   ProductCharacteristicEnum: () => (/* reexport safe */ _product_characteristic_enum__WEBPACK_IMPORTED_MODULE_6__.ProductCharacteristicEnum),
/* harmony export */   ProductConstants: () => (/* reexport safe */ _product_constant__WEBPACK_IMPORTED_MODULE_4__.ProductConstants),
/* harmony export */   ProductPriceTypeEnum: () => (/* reexport safe */ _product_price_type_enum__WEBPACK_IMPORTED_MODULE_5__.ProductPriceTypeEnum),
/* harmony export */   SofyComboProducts: () => (/* reexport safe */ _sofy_combo_products_constants__WEBPACK_IMPORTED_MODULE_7__.SofyComboProducts)
/* harmony export */ });
/* harmony import */ var _omapi_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi.constants */ 50361);
/* harmony import */ var _omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi-characteristic.enum */ 19751);
/* harmony import */ var _omapi_family_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omapi-family.constants */ 1773);
/* harmony import */ var _language_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.enum */ 85077);
/* harmony import */ var _product_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.constant */ 80351);
/* harmony import */ var _product_price_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-price-type.enum */ 72825);
/* harmony import */ var _product_characteristic_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-characteristic.enum */ 73188);
/* harmony import */ var _sofy_combo_products_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sofy-combo-products.constants */ 67919);









/***/ }),

/***/ 85077:
/*!**************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/language.enum.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageEnum: () => (/* binding */ LanguageEnum)
/* harmony export */ });
var LanguageEnum;
(function (LanguageEnum) {
  LanguageEnum["NL"] = "nl";
  LanguageEnum["FR"] = "fr";
  LanguageEnum["EN"] = "en";
})(LanguageEnum || (LanguageEnum = {}));

/***/ }),

/***/ 19751:
/*!**************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/omapi-characteristic.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiCharacteristicEnum: () => (/* binding */ OmapiCharacteristicEnum),
/* harmony export */   OmapiProductGroupEnum: () => (/* binding */ OmapiProductGroupEnum),
/* harmony export */   OmapiProductSubGroupEnum: () => (/* binding */ OmapiProductSubGroupEnum)
/* harmony export */ });
var OmapiCharacteristicEnum;
(function (OmapiCharacteristicEnum) {
  OmapiCharacteristicEnum["PRODUCT_GROUP"] = "productGroup";
  OmapiCharacteristicEnum["PRODUCT_SUB_GROUP"] = "productSubGroup";
  OmapiCharacteristicEnum["PRODUCT_LEVEL"] = "productLevel";
  OmapiCharacteristicEnum["PRODUCT_TIER"] = "productTier";
  OmapiCharacteristicEnum["CONSTITUENTS"] = "constituents";
  OmapiCharacteristicEnum["ESIM_AVAILABLE"] = "esimAvailable";
})(OmapiCharacteristicEnum || (OmapiCharacteristicEnum = {}));
var OmapiProductGroupEnum;
(function (OmapiProductGroupEnum) {
  OmapiProductGroupEnum["FMC"] = "FMC";
})(OmapiProductGroupEnum || (OmapiProductGroupEnum = {}));
var OmapiProductSubGroupEnum;
(function (OmapiProductSubGroupEnum) {
  OmapiProductSubGroupEnum["CONNECT5"] = "C5";
  OmapiProductSubGroupEnum["CONNECT5_SOHO"] = "C5 SOHO";
  OmapiProductSubGroupEnum["KLIK"] = "KLIK";
})(OmapiProductSubGroupEnum || (OmapiProductSubGroupEnum = {}));

/***/ }),

/***/ 1773:
/*!***********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/omapi-family.constants.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiFamilyConstants: () => (/* binding */ OmapiFamilyConstants),
/* harmony export */   OmapiFamilyProductType: () => (/* binding */ OmapiFamilyProductType),
/* harmony export */   OmapiFamilyTierEnum: () => (/* binding */ OmapiFamilyTierEnum)
/* harmony export */ });
var OmapiFamilyProductType;
(function (OmapiFamilyProductType) {
  OmapiFamilyProductType["MOBILE"] = "mobile";
  OmapiFamilyProductType["ENTERTAINMENT"] = "entertainment";
  OmapiFamilyProductType["FIXED_TELEPHONY"] = "fixedTelephony";
})(OmapiFamilyProductType || (OmapiFamilyProductType = {}));
class OmapiFamilyConstants {
  static #_ = this.FAMILY_PRODUCT_TYPES = [OmapiFamilyProductType.MOBILE, OmapiFamilyProductType.ENTERTAINMENT, OmapiFamilyProductType.FIXED_TELEPHONY];
}
var OmapiFamilyTierEnum;
(function (OmapiFamilyTierEnum) {
  OmapiFamilyTierEnum["FURIOUS"] = "furious";
  OmapiFamilyTierEnum["FAST"] = "fast";
  OmapiFamilyTierEnum["KLIK"] = "klik";
  OmapiFamilyTierEnum["ONE"] = "ONE";
  OmapiFamilyTierEnum["ONE_UP"] = "ONEup";
})(OmapiFamilyTierEnum || (OmapiFamilyTierEnum = {}));

/***/ }),

/***/ 50361:
/*!****************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/omapi.constants.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiConstituentType: () => (/* binding */ OmapiConstituentType),
/* harmony export */   OmapiDarwinProducts: () => (/* binding */ OmapiDarwinProducts),
/* harmony export */   OmapiLegacyProducts: () => (/* binding */ OmapiLegacyProducts),
/* harmony export */   OmapiProductTierEnum: () => (/* binding */ OmapiProductTierEnum),
/* harmony export */   OmapiProductType: () => (/* binding */ OmapiProductType),
/* harmony export */   OmapiServiceSpecificationLabelKey: () => (/* binding */ OmapiServiceSpecificationLabelKey),
/* harmony export */   OmapiServiceType: () => (/* binding */ OmapiServiceType),
/* harmony export */   OmapiSubCategoryEnum: () => (/* binding */ OmapiSubCategoryEnum)
/* harmony export */ });
var OmapiServiceSpecificationLabelKey;
(function (OmapiServiceSpecificationLabelKey) {
  OmapiServiceSpecificationLabelKey["MOBILE_INTERNET_UNLIMITED_SHARED_SPEC"] = "spec.mobileinternet.volume.unlimited.shared";
  OmapiServiceSpecificationLabelKey["FIXED_INTERNET_DL_SPEED"] = "spec.fixedinternet.speed.download";
  OmapiServiceSpecificationLabelKey["FIXED_INTERNET_DL_VOLUME_UNLIMITED"] = "spec.fixedinternet.volume.download.fup";
  OmapiServiceSpecificationLabelKey["FIXED_INTERNET_DL_VOLUME_CAP"] = "spec.fixedinternet.volume.download.cap";
  OmapiServiceSpecificationLabelKey["SPEC_BUNDLE_MAX_MOBILE_LINES"] = "spec.bundle.mobile.maxlines";
})(OmapiServiceSpecificationLabelKey || (OmapiServiceSpecificationLabelKey = {}));
var OmapiServiceType;
(function (OmapiServiceType) {
  OmapiServiceType["FIXED_INTERNET"] = "FIXED_INTERNET";
  OmapiServiceType["FIXED_CALLING"] = "FIXED_CALLING";
  OmapiServiceType["MOBILE_INTERNET"] = "MOBILE_INTERNET";
  OmapiServiceType["MOBILE_CALLING"] = "MOBILE_CALLING";
  OmapiServiceType["GENERAL"] = "GENERAL";
  OmapiServiceType["DTV"] = "DTV";
  OmapiServiceType["ATV"] = "ATV";
  OmapiServiceType["TV"] = "TV";
})(OmapiServiceType || (OmapiServiceType = {}));
var OmapiConstituentType;
(function (OmapiConstituentType) {
  OmapiConstituentType["DTV"] = "dtv";
  OmapiConstituentType["INTERNET"] = "internet_line";
  OmapiConstituentType["MOBILE"] = "mobile_line";
})(OmapiConstituentType || (OmapiConstituentType = {}));
var OmapiProductTierEnum;
(function (OmapiProductTierEnum) {
  OmapiProductTierEnum["LOW"] = "Low";
  OmapiProductTierEnum["MID"] = "Mid";
  OmapiProductTierEnum["HIGH"] = "High";
})(OmapiProductTierEnum || (OmapiProductTierEnum = {}));
var OmapiLegacyProducts;
(function (OmapiLegacyProducts) {
  OmapiLegacyProducts["WHOP"] = "71";
  OmapiLegacyProducts["WHOPPA"] = "70";
})(OmapiLegacyProducts || (OmapiLegacyProducts = {}));
var OmapiDarwinProducts;
(function (OmapiDarwinProducts) {
  OmapiDarwinProducts["STREAMING_SERVICE_CONTAINER"] = "STRM0001";
  OmapiDarwinProducts["NETFLIX_PREMIUM_ADDON"] = "STRM0006";
  OmapiDarwinProducts["NETFLIX_STANDARD"] = "STRM0005";
})(OmapiDarwinProducts || (OmapiDarwinProducts = {}));
var OmapiProductType;
(function (OmapiProductType) {
  OmapiProductType["PRODUCT"] = "PRODUCT";
  OmapiProductType["BUNDLE"] = "BUNDLE";
  OmapiProductType["E_SIM"] = "E_SIM";
})(OmapiProductType || (OmapiProductType = {}));
var OmapiSubCategoryEnum;
(function (OmapiSubCategoryEnum) {
  OmapiSubCategoryEnum["NETFLIX"] = "Netflix";
})(OmapiSubCategoryEnum || (OmapiSubCategoryEnum = {}));

/***/ }),

/***/ 73188:
/*!****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/product-characteristic.enum.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCharacteristicEnum: () => (/* binding */ ProductCharacteristicEnum)
/* harmony export */ });
var ProductCharacteristicEnum;
(function (ProductCharacteristicEnum) {
  ProductCharacteristicEnum["PRODUCT_GROUP"] = "productGroup";
  ProductCharacteristicEnum["PRODUCT_LEVEL"] = "productLevel";
  ProductCharacteristicEnum["PRODUCT_TIER"] = "productTier";
  ProductCharacteristicEnum["MAX_MOBILE_LINES"] = "maxMobileLines";
  ProductCharacteristicEnum["SHARED_MOBILE_DATA"] = "sharedMobileData";
})(ProductCharacteristicEnum || (ProductCharacteristicEnum = {}));

/***/ }),

/***/ 72825:
/*!************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/product-price-type.enum.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductPriceTypeEnum: () => (/* binding */ ProductPriceTypeEnum)
/* harmony export */ });
var ProductPriceTypeEnum;
(function (ProductPriceTypeEnum) {
  ProductPriceTypeEnum["RECURRENT"] = "RECURRENT";
  ProductPriceTypeEnum["ONE_TIME"] = "ONE-TIME";
  ProductPriceTypeEnum["OMAPI_RECURRENT_CHARGE"] = "Recurrent Charge";
  ProductPriceTypeEnum["OMAPI_NON_RECURRENT_CHARGE"] = "Non Recurrent Charge";
})(ProductPriceTypeEnum || (ProductPriceTypeEnum = {}));

/***/ }),

/***/ 80351:
/*!*****************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/product.constant.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductConstants: () => (/* binding */ ProductConstants)
/* harmony export */ });
class ProductConstants {
  static #_ = this.WEIGHT = 'weight';
  static #_2 = this.API_VERSION_V1 = 'v1';
  static #_3 = this.UNLIMITED = 'UNLIMITED';
  static #_4 = this.MOBILE_CALLING = 'MOBILE_CALLING';
  static #_5 = this.MOBILE_INTERNET = 'MOBILE_INTERNET';
  static #_6 = this.MOBILE_LINE = 'mobile_line';
  static #_7 = this.MOBILE_MONETARY = 'MOBILE_MONETARY';
  static #_8 = this.FIXED_CALLING = 'FIXED_CALLING';
  static #_9 = this.FIXED_INTERNET = 'FIXED_INTERNET';
  static #_10 = this.FEATURE = 'FEATURE';
  static #_11 = this.INTERNET = 'INTERNET';
  static #_12 = this.GENERAL = 'GENERAL';
  static #_13 = this.TV = 'TV';
  static #_14 = this.DTV = 'DTV';
  static #_15 = this.MINUTES = 'MINUTES';
  static #_16 = this.MIN = 'MIN';
  static #_17 = this.FUP = 'FUP';
  static #_18 = this.VOICE = ['voice', 'call-to-other-networks'];
  static #_19 = this.DATA = ['data', 'mobile-data'];
  static #_20 = this.EPC_LIST_TO_SHOW_RATE = ['PREPAID-MOBILE', 'BASE0000'];
  static #_21 = this.OMAPI_CATEGORY_BASE_PRO = 'BASE-PRO';
  static #_22 = this.OMAPI_CATEGORY_BASE_PRO_VOICE = 'BASE-PRO-VOICE';
  static #_23 = this.OMAPI_CATEGORY_PRE_PAID_MOBILE = 'PREPAID-MOBILE';
  static #_24 = this.OMAPI_CATEGORY_POST_PAID_MOBILE = 'POST-PAID-MOBILE';
  static #_25 = this.CONTEXT_PRODUCTS = '/products';
  static #_26 = this.PRODUCT_TYPE_BUNDLE = 'bundle';
  static #_27 = this.PRODUCT_TYPE_TELEPHONE = 'telephone';
  static #_28 = this.PRODUCT_TYPE_MOBILE = 'mobile';
  static #_29 = this.PRODUCT_TYPE_DTV = 'dtv';
  static #_30 = this.PRODUCT_TYPE_INTERNET = 'internet';
  static #_31 = this.TELEPHONE_RANK = '4';
  static #_32 = this.MOBILE_RANK = '5';
  static #_33 = this.DTV_RANK = '3';
  static #_34 = this.INTERNET_RANK = '2';
  static #_35 = this.BUNDLE_RANK = '1';
  static #_36 = this.PRODUCT_TYPE = '/type';
}

/***/ }),

/***/ 67919:
/*!******************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/constants/sofy-combo-products.constants.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyComboProducts: () => (/* binding */ SofyComboProducts)
/* harmony export */ });
const SofyComboProducts = [{
  productid: '22792_46948',
  producttype: 'BUNDLE',
  services: [{
    servicetype: 'FIXED_CALLING',
    experience: {
      experiencetype: 'CALL'
    },
    specifications: undefined
  }],
  customercategories: undefined,
  category: undefined,
  subcategory: undefined,
  visible: false,
  shortdescription: undefined,
  rates: undefined,
  visibilityrules: undefined,
  unlimited: false,
  priceType: undefined,
  salesofferingid: '',
  externalProductCode: '',
  labelkey: '',
  apps: undefined,
  weight: 10,
  localizedcontent: [{
    locale: 'nl',
    name: 'Vaste Telefonie + Phone2Go',
    logo: ''
  }, {
    locale: 'fr',
    name: 'Téléphonie Fixe + Phone2Go',
    logo: ''
  }]
}];

/***/ }),

/***/ 83443:
/*!*******************************************************!*\
  !*** ./libs/shared/omapi/src/lib/enums/chars.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharsEnum: () => (/* binding */ CharsEnum)
/* harmony export */ });
var CharsEnum;
(function (CharsEnum) {
  CharsEnum["HIDE_ADD_BUTTON_WHEN_PACK_ACTIVE"] = "hideaddbuttonwhenpackactive";
  CharsEnum["MUTUALLY_EXCLUSIVE_TO_CONTENT_PACK"] = "mutuallyexclusivetocontentpack";
  CharsEnum["CALL_CONTENT_PACK_DISCOUNTED_PRICE_API"] = "callcontentpackdicsountedpriceapi";
  CharsEnum["UPGRADABLE_TO"] = "upgradableto";
  CharsEnum["INTERNET_USAGE_LIMIT"] = "internet_usage_limit";
  CharsEnum["INTERNET_USAGE_INITIAL_THRESHOLD"] = "internet_usage_initial_threshold";
  CharsEnum["INTERNET_USAGE_ALERT_THRESHOLD"] = "internet_usage_alert_threshold";
  CharsEnum["IS_EXTERNAL_CONTENT_PACK"] = "isExternalContentPack";
  CharsEnum["PRODUCT_TIER"] = "producttier";
})(CharsEnum || (CharsEnum = {}));

/***/ }),

/***/ 8229:
/*!**************************************************!*\
  !*** ./libs/shared/omapi/src/lib/enums/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharsEnum: () => (/* reexport safe */ _chars_enum__WEBPACK_IMPORTED_MODULE_0__.CharsEnum)
/* harmony export */ });
/* harmony import */ var _chars_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chars.enum */ 83443);


/***/ }),

/***/ 31667:
/*!***************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/characteristics.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 81860:
/*!*****************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/chars.interface.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 22464:
/*!***********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/constituent.interface.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 50061:
/*!*******************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/details.interface.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 75819:
/*!*******************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   omapiConnectFiveFamily: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiConnectFiveFamily),
/* harmony export */   omapiFamilyFactory: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiFamilyFactory),
/* harmony export */   omapiFamilyOptinFactory: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiFamilyOptinFactory),
/* harmony export */   omapiFamilyOptionFactory: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiFamilyOptionFactory),
/* harmony export */   omapiFamilyTierFactory: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiFamilyTierFactory),
/* harmony export */   omapiKlikFamily: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiKlikFamily),
/* harmony export */   omapiMobileDataFactory: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiMobileDataFactory),
/* harmony export */   omapiProductInfoFactory: () => (/* reexport safe */ _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__.omapiProductInfoFactory),
/* harmony export */   rawOmapiProductTestFactory: () => (/* reexport safe */ _raw_omapi_product_interface_testfactory__WEBPACK_IMPORTED_MODULE_19__.rawOmapiProductTestFactory)
/* harmony export */ });
/* harmony import */ var _characteristics_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characteristics.interface */ 31667);
/* harmony import */ var _chars_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars.interface */ 81860);
/* harmony import */ var _constituent_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constituent.interface */ 22464);
/* harmony import */ var _details_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.interface */ 50061);
/* harmony import */ var _localized_content_names_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localized-content-names.interface */ 49484);
/* harmony import */ var _localized_content_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localized-content.interface */ 3514);
/* harmony import */ var _omapi_family_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omapi-family.interface */ 44510);
/* harmony import */ var _omapi_family_testfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./omapi-family.testfactory */ 97304);
/* harmony import */ var _omapi_product_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./omapi-product.interface */ 78768);
/* harmony import */ var _rate_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rate.interface */ 23744);
/* harmony import */ var _klik_omapi_family_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./klik-omapi-family.interface */ 77922);
/* harmony import */ var _raw_omapi_family_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./raw-omapi-family.interface */ 38723);
/* harmony import */ var _raw_omapi_premium_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./raw-omapi-premium.interface */ 59543);
/* harmony import */ var _raw_omapi_product_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./raw-omapi-product.interface */ 26294);
/* harmony import */ var _service_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service.interface */ 84608);
/* harmony import */ var _short_description_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./short-description.interface */ 90602);
/* harmony import */ var _specification_interface__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./specification.interface */ 85658);
/* harmony import */ var _sub_category_interface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sub-category.interface */ 47693);
/* harmony import */ var _visibilityrules_interface__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./visibilityrules.interface */ 77026);
/* harmony import */ var _raw_omapi_product_interface_testfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./raw-omapi-product.interface.testfactory */ 60641);





















/***/ }),

/***/ 77922:
/*!*****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/klik-omapi-family.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 49484:
/*!***********************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/localized-content-names.interface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3514:
/*!*****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/localized-content.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 44510:
/*!************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/omapi-family.interface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 97304:
/*!**************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/omapi-family.testfactory.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   omapiConnectFiveFamily: () => (/* binding */ omapiConnectFiveFamily),
/* harmony export */   omapiFamilyFactory: () => (/* binding */ omapiFamilyFactory),
/* harmony export */   omapiFamilyOptinFactory: () => (/* binding */ omapiFamilyOptinFactory),
/* harmony export */   omapiFamilyOptionFactory: () => (/* binding */ omapiFamilyOptionFactory),
/* harmony export */   omapiFamilyTierFactory: () => (/* binding */ omapiFamilyTierFactory),
/* harmony export */   omapiKlikFamily: () => (/* binding */ omapiKlikFamily),
/* harmony export */   omapiMobileDataFactory: () => (/* binding */ omapiMobileDataFactory),
/* harmony export */   omapiProductInfoFactory: () => (/* binding */ omapiProductInfoFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/omapi-product.testfactory */ 61756);


const omapiMobileDataFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  omapiId: '456',
  productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build(),
  key: 'limited'
});
const omapiProductInfoFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  omapiId: '456',
  productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build(),
  mobileData: []
});
const omapiFamilyOptinFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  key: 'fixed_telephony',
  omapiId: '37785',
  mobileId: '36860'
});
const omapiFamilyOptionFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  type: 'mobile',
  key: 'international_calling',
  omapiId: 'BERU0001',
  productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build(),
  parents: []
});
const omapiFamilyTierFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  key: 'name',
  omapiId: '123',
  productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build(),
  mobile: [omapiProductInfoFactory.build({
    omapiId: '567'
  }), omapiProductInfoFactory.build({
    omapiId: '568'
  })],
  entertainment: [omapiProductInfoFactory.build({
    omapiId: '789'
  }), omapiProductInfoFactory.build({
    omapiId: '780'
  })],
  fixedTelephony: [omapiProductInfoFactory.build({
    omapiId: '121'
  })],
  optins: [omapiFamilyOptinFactory.build()],
  options: [omapiFamilyOptionFactory.build()]
});
const omapiFamilyFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  tiers: [omapiFamilyTierFactory.build()]
});
const KLIK_2_LIM = 'm-klik-2-lim';
const ENTERTAINMENT_1 = 'entertainment-id-1';
const omapiKlikFamily = () => {
  return omapiFamilyFactory.build({
    tiers: [omapiFamilyTierFactory.build({
      key: 'klik',
      omapiId: KLIK_2_LIM,
      entertainment: [omapiProductInfoFactory.build({
        omapiId: ENTERTAINMENT_1
      })],
      mobile: [omapiProductInfoFactory.build({
        omapiId: 'm-klik-1-lim',
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 1
          }
        }),
        mobileData: [{
          omapiId: 'm-klik-1-lim',
          key: 'limited'
        }, {
          omapiId: 'm-klik-1-unl',
          key: 'unlimited'
        }]
      }), omapiProductInfoFactory.build({
        omapiId: KLIK_2_LIM,
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 1
          }
        }),
        mobileData: [{
          omapiId: KLIK_2_LIM,
          key: 'limited'
        }, {
          omapiId: 'm-klik-2-unl',
          key: 'unlimited'
        }]
      })],
      optins: []
    })]
  });
};
const THRILL_1 = 'm-thrill-1';
const THRILL_2 = 'm-thrill-2';
const THRILL_3 = 'm-thrill-3';
const omapiConnectFiveFamily = () => {
  return omapiFamilyFactory.build({
    tiers: [omapiFamilyTierFactory.build({
      key: 'chill',
      omapiId: 'm-chill-1',
      entertainment: [omapiProductInfoFactory.build({
        omapiId: ENTERTAINMENT_1
      }), omapiProductInfoFactory.build({
        omapiId: 'entertainment-id-2'
      })],
      mobile: [omapiProductInfoFactory.build({
        omapiId: 'm-chill-1',
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 1
          }
        })
      }), omapiProductInfoFactory.build({
        omapiId: 'm-chill-2',
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 2
          }
        })
      }), omapiProductInfoFactory.build({
        omapiId: 'm-chill-3',
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 3
          }
        })
      })],
      optins: [omapiFamilyOptinFactory.build({
        key: 'fixed_telephony',
        omapiId: 'o-chill-1-ft',
        mobileId: 'm-chill-1'
      }), omapiFamilyOptinFactory.build({
        key: 'fixed_telephony',
        omapiId: 'o-chill-2-ft',
        mobileId: 'm-chill-2'
      }), omapiFamilyOptinFactory.build({
        key: 'fixed_telephony',
        omapiId: 'o-chill-3-ft',
        mobileId: 'm-chill-3'
      }), omapiFamilyOptinFactory.build({
        key: 'data_sim',
        omapiId: 'o-chill-1-ds',
        mobileId: 'm-chill-1'
      }), omapiFamilyOptinFactory.build({
        key: 'data_sim',
        omapiId: 'o-chill-2-ds',
        mobileId: 'm-chill-2'
      }), omapiFamilyOptinFactory.build({
        key: 'data_sim',
        omapiId: 'o-chill-3-ds',
        mobileId: 'm-chill-3'
      })]
    }), omapiFamilyTierFactory.build({
      key: 'thrill',
      omapiId: THRILL_1,
      entertainment: [omapiProductInfoFactory.build({
        omapiId: ENTERTAINMENT_1
      }), omapiProductInfoFactory.build({
        omapiId: 'entertainment-id-2'
      })],
      mobile: [omapiProductInfoFactory.build({
        omapiId: THRILL_1,
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 1
          }
        })
      }), omapiProductInfoFactory.build({
        omapiId: THRILL_2,
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 2
          }
        })
      }), omapiProductInfoFactory.build({
        omapiId: THRILL_3,
        productInfo: _models_omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTestfactory.build({
          characteristics: {
            maxMobileLines: 3
          }
        })
      })],
      optins: [omapiFamilyOptinFactory.build({
        key: 'fixed_telephony',
        omapiId: 'o-thrill-1-ft',
        mobileId: THRILL_1
      }), omapiFamilyOptinFactory.build({
        key: 'fixed_telephony',
        omapiId: 'o-thrill-2-ft',
        mobileId: THRILL_2
      }), omapiFamilyOptinFactory.build({
        key: 'fixed_telephony',
        omapiId: 'o-thrill-3-ft',
        mobileId: THRILL_3
      }), omapiFamilyOptinFactory.build({
        key: 'data_sim',
        omapiId: 'o-thrill-1-ds',
        mobileId: THRILL_1
      }), omapiFamilyOptinFactory.build({
        key: 'data_sim',
        omapiId: 'o-thrill-2-ds',
        mobileId: THRILL_2
      }), omapiFamilyOptinFactory.build({
        key: 'data_sim',
        omapiId: 'o-thrill-3-ds',
        mobileId: THRILL_3
      })]
    })]
  });
};

/***/ }),

/***/ 78768:
/*!*************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/omapi-product.interface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 23744:
/*!****************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/rate.interface.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 38723:
/*!****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/raw-omapi-family.interface.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 59543:
/*!*****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/raw-omapi-premium.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 60641:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/raw-omapi-product.interface.testfactory.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rawOmapiProductTestFactory: () => (/* binding */ rawOmapiProductTestFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const rawOmapiProductTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  category: [],
  unlimited: false,
  priceType: 'Non Recurrent Charge',
  requiresInstallation: false,
  usageBasedRatePlan: false,
  productid: '9155501914465272430',
  labelkey: 'Discount Telenet Customer Price',
  salesofferingid: 'test',
  externalProductCode: 'test',
  producttype: 'test',
  weight: 1,
  apps: [],
  services: [],
  customercategories: ['All', 'Residential', 'Production Test Business', 'Internal', 'Production Test', 'Event/Demo', 'Business'],
  visible: false,
  localizedcontent: [{
    locale: 'nl',
    name: 'Korting Telenet Klantenprijs',
    logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price1.png'
  }, {
    locale: 'fr',
    name: 'Réduction Prix Client Telenet',
    logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price2.png'
  }, {
    locale: 'en',
    name: 'Discount Telenet Customer Price',
    logo: 'https://customerzone.prd.base.be/content/dam/www-base-be/img/self-service/products/discount-telenet-customer-price3.png'
  }],
  isYupProduct: false,
  isEligibleForPauseProfile: false,
  isEligibleForAutoPause: false,
  isEligibleForSettinglimits: false,
  isFPBProduct: false
});

/***/ }),

/***/ 26294:
/*!*****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/raw-omapi-product.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 84608:
/*!*******************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/service.interface.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 90602:
/*!*****************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/short-description.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 85658:
/*!*************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/specification.interface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 47693:
/*!************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/sub-category.interface.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 77026:
/*!***************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/interfaces/visibilityrules.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 29170:
/*!****************************************************!*\
  !*** ./libs/shared/omapi/src/lib/mappers/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiPremiumMapper: () => (/* reexport safe */ _omapi_premium_mapper__WEBPACK_IMPORTED_MODULE_0__.OmapiPremiumMapper),
/* harmony export */   OmapiProductMapper: () => (/* reexport safe */ _omapi_product_mapper__WEBPACK_IMPORTED_MODULE_1__.OmapiProductMapper)
/* harmony export */ });
/* harmony import */ var _omapi_premium_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-premium.mapper */ 19834);
/* harmony import */ var _omapi_product_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi-product.mapper */ 65865);



/***/ }),

/***/ 19834:
/*!*******************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/mappers/omapi-premium.mapper.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiPremiumMapper: () => (/* binding */ OmapiPremiumMapper)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 51562);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ 70292);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class OmapiPremiumMapper {
  toModel(rawResponse) {
    return this.createOmapiPremium(rawResponse);
  }
  createOmapiPremium(rawResponse) {
    const omapiPremium = new _models__WEBPACK_IMPORTED_MODULE_0__.OmapiPremium();
    if (rawResponse.serviceDetails) {
      omapiPremium.premiumSerivceId = rawResponse.serviceDetails.premiumSerivceId || '';
      omapiPremium.details = rawResponse.serviceDetails.details.map(detail => this.mapPremiumDetails(detail));
    }
    return omapiPremium;
  }
  mapPremiumDetails(rawDetails) {
    const details = {};
    details.serviceType = rawDetails.serviceType;
    details.serviceStatus = rawDetails.serviceStatus;
    details.serviceDescription = rawDetails.serviceDescription;
    if (rawDetails.serviceConfirmedDate) {
      details.serviceConfirmedDate = this.convertDate(rawDetails.serviceConfirmedDate);
    }
    if (rawDetails.serviceEndDate) {
      details.serviceEndDate = this.convertDate(rawDetails.serviceEndDate);
    }
    details.premium = rawDetails.premium;
    details.fixOrMobile = rawDetails.fixOrMobile;
    if (rawDetails.priceStartDate) {
      details.priceStartDate = this.convertDate(rawDetails.priceStartDate);
    }
    if (rawDetails.priceEndDate) {
      details.priceEndDate = this.convertDate(rawDetails.priceEndDate);
    }
    details.sendSms = this.covertPrice(rawDetails.sendSms);
    details.receiveSms = this.covertPrice(rawDetails.receiveSms);
    details.sendMms = this.covertPrice(rawDetails.sendMms);
    details.receiveMms = this.covertPrice(rawDetails.receiveMms);
    details.callPerMinute = this.covertPrice(rawDetails.callPerMinute);
    details.callPerSecond = this.covertPrice(rawDetails.callPerSecond);
    details.setUpCost = rawDetails.setUpCost;
    if (rawDetails.contentProviderStartDate) {
      details.contentProviderStartDate = this.convertDate(rawDetails.contentProviderStartDate);
    }
    if (rawDetails.contentProviderEndDate) {
      details.contentProviderEndDate = this.convertDate(rawDetails.contentProviderEndDate);
    }
    details.contentProviderName = rawDetails.contentProviderName;
    details.contentProviderStreet = rawDetails.contentProviderStreet;
    details.contentProviderPostalCode = rawDetails.contentProviderPostalCode;
    details.contentProviderCity = rawDetails.contentProviderCity;
    details.contentProviderCountry = rawDetails.contentProviderCountry;
    details.customerCareTelephoneOrEmail = rawDetails.customerCareTelephoneOrEmail;
    details.customerCareUrl = rawDetails.customerCareUrl;
    return details;
  }
  covertPrice(rawPrice) {
    if (rawPrice) {
      return rawPrice.split('/')[0];
    }
    return undefined;
  }
  convertDate(rawDate) {
    return dayjs__WEBPACK_IMPORTED_MODULE_1___default()(rawDate, 'YYYYMMDD').format('DD/MM/YYYY');
  }
  static #_ = this.ɵfac = function OmapiPremiumMapper_Factory(t) {
    return new (t || OmapiPremiumMapper)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: OmapiPremiumMapper,
    factory: OmapiPremiumMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 65865:
/*!*******************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/mappers/omapi-product.mapper.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiProductMapper: () => (/* binding */ OmapiProductMapper)
/* harmony export */ });
/* harmony import */ var _models_omapi_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/omapi-product.model */ 25070);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums_chars_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/chars.enum */ 83443);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);






class OmapiProductMapper {
  constructor(languageService, normalizationService) {
    this.languageService = languageService;
    this.normalizationService = normalizationService;
    this.ignoredDarwinSpecifications = ['sharedmobiledata', 'max_mobile_lines'];
  }
  toModel(rawOmapiProduct) {
    return this.createOmapiProduct(rawOmapiProduct);
  }
  createOmapiProduct(rawOmapiProduct) {
    const omapiProduct = new _models_omapi_product_model__WEBPACK_IMPORTED_MODULE_0__.OmapiProduct();
    const rawOmapiProductData = rawOmapiProduct && rawOmapiProduct.product;
    if (rawOmapiProductData) {
      this.mapOmapiData(omapiProduct, rawOmapiProductData);
      const contentForLocale = this.getContentForLocale(rawOmapiProductData.localizedcontent);
      if (contentForLocale) {
        omapiProduct.name = contentForLocale.name;
        omapiProduct.logo = contentForLocale.logo;
      }
      if (rawOmapiProductData.usageLimits) {
        omapiProduct.usageLimits = rawOmapiProductData.usageLimits;
      }
      if (rawOmapiProductData.usagenotifications) {
        omapiProduct.usagenotifications = rawOmapiProductData.usagenotifications;
      }
      if (rawOmapiProductData.constituents) {
        omapiProduct.productConstituents = this.createOmapiConstituents(rawOmapiProductData.constituents);
      }
      if (omapiProduct.isDarwinProduct()) {
        this.correctDarwinCharacteristics(omapiProduct, rawOmapiProductData);
      }
    }
    return omapiProduct;
  }
  mapOmapiData(omapiProduct, rawOmapiProductData) {
    omapiProduct.productId = rawOmapiProductData.productid && rawOmapiProductData.productid.toString() || undefined;
    omapiProduct.isYupProduct = rawOmapiProductData.isYupProduct;
    omapiProduct.salesOfferingId = rawOmapiProductData.salesofferingid;
    omapiProduct.externalProductCode = rawOmapiProductData.externalProductCode;
    omapiProduct.productType = rawOmapiProductData.producttype && rawOmapiProductData.producttype.toUpperCase();
    omapiProduct.categories = this.normalizationService.normalizeList(rawOmapiProductData.category);
    omapiProduct.customerCategories = this.normalizationService.normalizeList(rawOmapiProductData.customercategories);
    omapiProduct.subCategory = this.createSubCategory(rawOmapiProductData.subcategory);
    omapiProduct.labelKey = rawOmapiProductData.labelkey;
    omapiProduct.visible = rawOmapiProductData.visible;
    omapiProduct.family = rawOmapiProductData.family;
    omapiProduct.weight = rawOmapiProductData.weight;
    omapiProduct.services = this.createServices(rawOmapiProductData.services);
    omapiProduct.apps = this.createApps(rawOmapiProductData.apps);
    omapiProduct.localizedContent = this.createLocalizedContents(rawOmapiProductData.localizedcontent);
    omapiProduct.shortDescription = this.createShortDescription(rawOmapiProductData.shortdescription);
    omapiProduct.rates = this.createRates(rawOmapiProductData.rates);
    omapiProduct.visibilityRules = this.createVisibilityRules(rawOmapiProductData.visibilityrules);
    omapiProduct.unlimited = rawOmapiProductData.unlimited;
    omapiProduct.eligibleForDiscount = this.hasDiscount(rawOmapiProductData.characteristics);
    omapiProduct.unlimitedInternet = rawOmapiProductData.unlimitedInternet;
    omapiProduct.priceType = rawOmapiProductData.priceType;
    omapiProduct.characteristics = this.getCharacteristics(rawOmapiProductData.characteristics);
    omapiProduct.usageBasedRatePlan = rawOmapiProductData.usageBasedRatePlan;
    omapiProduct.requiresInstallation = rawOmapiProductData.requiresInstallation;
    omapiProduct.maxCount = rawOmapiProductData.maxCount;
    omapiProduct.chars = rawOmapiProductData.characteristics ? this.getChars(rawOmapiProductData.characteristics) : [];
    omapiProduct.isExternalContentPack = this.hasExternalContentPack(omapiProduct.chars);
    omapiProduct.isEligibleForSettinglimits = rawOmapiProductData.isEligibleForSettinglimits;
    omapiProduct.isEligibleForAutoPause = rawOmapiProductData.isEligibleForAutoPause;
    omapiProduct.isEligibleForPauseProfile = rawOmapiProductData.isEligibleForPauseProfile;
    omapiProduct.isFPBProduct = rawOmapiProductData.isFPBProduct;
  }
  hasExternalContentPack(chars) {
    let charObject = {};
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(chars)) {
      charObject = chars?.find(char => {
        return char.key === _enums_chars_enum__WEBPACK_IMPORTED_MODULE_2__.CharsEnum.IS_EXTERNAL_CONTENT_PACK;
      });
    }
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(charObject) && !(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(charObject?.values) ? charObject?.values?.[0] : 'false';
  }
  hasDiscount(rawChars) {
    const discountChar = rawChars && rawChars.elementarycharacteristics && rawChars.elementarycharacteristics.find(char => char.key === _enums_chars_enum__WEBPACK_IMPORTED_MODULE_2__.CharsEnum.CALL_CONTENT_PACK_DISCOUNTED_PRICE_API);
    if (discountChar) {
      return JSON.parse(discountChar.value.split(',')[0]);
    }
    return false;
  }
  getContentForLocale(rawLocalizedContents) {
    return rawLocalizedContents && rawLocalizedContents.find(localizedContent => {
      return localizedContent.locale === this.languageService.getLanguage();
    });
  }
  createLocalizedContents(rawLocalizedContents) {
    return rawLocalizedContents && rawLocalizedContents.map(rawLocalizedContent => {
      return this.createLocalizedContent(rawLocalizedContent);
    });
  }
  createOmapiConstituents(rawOmapiConstituents) {
    return rawOmapiConstituents && rawOmapiConstituents.map(rawOmapiConstituent => {
      return rawOmapiConstituent;
    });
  }
  createLocalizedContent(rawLocalizedContent) {
    const localizedContent = {};
    localizedContent.locale = rawLocalizedContent.locale;
    localizedContent.name = rawLocalizedContent.name;
    localizedContent.logo = rawLocalizedContent.logo;
    return localizedContent;
  }
  createServices(rawServices) {
    return rawServices && rawServices.map(rawService => {
      return this.createService(rawService);
    });
  }
  createService(rawService) {
    const service = {};
    service.serviceType = rawService.servicetype;
    service.specifications = this.createSpecifications(rawService.specifications);
    if (rawService.experience) {
      service.experience = {};
      service.experience.experienceType = rawService.experience.experiencetype;
    }
    return service;
  }
  createSpecifications(rawSpecifications) {
    return rawSpecifications && rawSpecifications.filter(spec => !this.ignoredDarwinSpecifications.includes(spec.labelkey)).map(rawSpecification => {
      return this.createSpecification(rawSpecification);
    });
  }
  createSpecification(rawSpecification) {
    const specification = {};
    specification.labelKey = this.normalizationService.normalizeKey(rawSpecification.labelkey);
    specification.unit = rawSpecification.unit;
    specification.disclaimerLocalizedContent = rawSpecification.disclaimerlocalizedcontent ? this.getContentForLocale(rawSpecification.disclaimerlocalizedcontent) : undefined;
    specification.value = rawSpecification.value;
    specification.minValue = rawSpecification.minvalue;
    specification.maxValue = rawSpecification.maxvalue;
    specification.visible = rawSpecification.visible;
    specification.weight = rawSpecification.weight;
    specification.productType = rawSpecification.grouping;
    specification.localizedContent = this.getContentForLocale(rawSpecification.localizedcontent);
    return specification;
  }
  createRate(rawRate) {
    const rate = {};
    rate.type = this.normalizationService.normalizeKey(rawRate.type);
    rate.unit = rawRate.unit;
    rate.cost = rawRate.cost;
    rate.currency = rawRate.currency;
    return rate;
  }
  createRates(rawRates) {
    return rawRates && rawRates.map(rawRate => {
      return this.createRate(rawRate);
    });
  }
  createApps(rawApps) {
    return rawApps;
  }
  createShortDescription(rawShortDescription) {
    const shortDescription = {};
    if (rawShortDescription) {
      shortDescription.localizedContent = this.getContentForLocale(rawShortDescription.localizedcontent);
    }
    return shortDescription;
  }
  createSubCategory(rawSubCategory) {
    const subCategory = {};
    if (rawSubCategory) {
      subCategory.name = rawSubCategory.name;
      subCategory.weight = rawSubCategory.weight;
      subCategory.mutualExclusion = rawSubCategory.mutualexclusion;
      subCategory.localizedContent = this.createLocalizedContents(rawSubCategory.localizedcontent);
      subCategory.localizedName = this.getContentForLocale(rawSubCategory.localizedcontent) ? this.getContentForLocale(rawSubCategory.localizedcontent)?.name : undefined;
    }
    return subCategory;
  }
  // to do create the createCharacteristics with the same convention as these other methods
  // need to continue working on this
  getCharacteristics(rawOmapiCharacteristics) {
    const characteristics = {};
    if (rawOmapiCharacteristics) {
      characteristics.serviceCategory = rawOmapiCharacteristics.service_category;
      characteristics.detailedScale = this.getValueUnit(rawOmapiCharacteristics.detailed_scale);
      characteristics.productGroup = rawOmapiCharacteristics.productgroup;
      characteristics.productSubGroup = rawOmapiCharacteristics.productsubgroup ? rawOmapiCharacteristics.productsubgroup : '';
      characteristics.productSegment = rawOmapiCharacteristics.productsegment;
      characteristics.priceInclVat = this.getFloatValue(rawOmapiCharacteristics.salespricevatincl);
      characteristics.priceExclVat = this.getFloatValue(rawOmapiCharacteristics.salespricevatexcl);
      characteristics.rentalPriceInclVat = this.getFloatValue(rawOmapiCharacteristics.rentalpricevatincl);
      characteristics.rentalPriceExclVat = this.getFloatValue(rawOmapiCharacteristics.rentalpricevatexcl);
      characteristics.sharedMobileData = rawOmapiCharacteristics.sharedmobiledata;
      characteristics.sharedMobileDataUnlimited = rawOmapiCharacteristics.sharedmobiledata_unlimited ? this.getValueUnit(rawOmapiCharacteristics.sharedmobiledata_unlimited) : undefined;
      characteristics.activationSalesOfferingId = rawOmapiCharacteristics.activationsalesofferingid;
      characteristics.maxIncludedDataReminders = rawOmapiCharacteristics.max_mobile_includeddata_reminders;
      characteristics.maxMobileOutOfBundleReminders = rawOmapiCharacteristics.max_mobile_outofbundle_reminders;
      characteristics.maxMobileLines = rawOmapiCharacteristics.max_mobile_lines;
      characteristics.recipientsMandatory = rawOmapiCharacteristics.huwrecipientsmandatory === '1';
      characteristics.deviceType = rawOmapiCharacteristics.devicetype;
      characteristics.isSellable = rawOmapiCharacteristics.is_sellable;
      characteristics.weightNl = this.getIntegerValue(rawOmapiCharacteristics.weightnl);
      characteristics.weightFr = this.getIntegerValue(rawOmapiCharacteristics.weightfr);
      characteristics.productTier = this.getProductTier(rawOmapiCharacteristics);
      characteristics.productLevel = rawOmapiCharacteristics.productlevel;
      characteristics.prices = rawOmapiCharacteristics.prices ? rawOmapiCharacteristics.prices : undefined;
      characteristics.constituents = rawOmapiCharacteristics.constituents ? this.createConstituents(rawOmapiCharacteristics.constituents) : undefined;
      characteristics.esimAvailable = rawOmapiCharacteristics.esimAvailable;
    }
    return characteristics;
  }
  correctDarwinCharacteristics(omapiProduct, rawOmapiProduct) {
    if (rawOmapiProduct.services && !!rawOmapiProduct.services.length) {
      this.correctSharedMobileData(omapiProduct, rawOmapiProduct.services);
      this.correctMaxMobileLines(omapiProduct, rawOmapiProduct.services);
    }
  }
  correctSharedMobileData(omapiProduct, services) {
    const mobileInternet = services.filter(service => service.servicetype === 'MOBILE_INTERNET').flatMap(service => service.specifications).find(spec => spec?.labelkey === 'sharedmobiledata');
    if (mobileInternet) {
      omapiProduct.characteristics.sharedMobileData = {
        value: mobileInternet.value,
        unit: mobileInternet.unit
      };
    }
  }
  correctMaxMobileLines(omapiProduct, services) {
    const maxMobileLines = services.filter(service => service.servicetype === 'GENERAL').flatMap(service => service.specifications).find(spec => spec?.labelkey === 'max_mobile_lines');
    if (maxMobileLines) {
      omapiProduct.characteristics.maxMobileLines = maxMobileLines.value;
    }
  }
  getProductTier(rawOmapiCharacteristics) {
    if (!rawOmapiCharacteristics.producttier) {
      return rawOmapiCharacteristics.elementarycharacteristics?.filter(el => el.key === _enums_chars_enum__WEBPACK_IMPORTED_MODULE_2__.CharsEnum.PRODUCT_TIER).map(e => e.value).shift();
    }
    return rawOmapiCharacteristics.producttier;
  }
  getFloatValue(property) {
    return property ? parseFloat(property.value) : undefined;
  }
  getIntegerValue(property) {
    return property ? parseInt(property) : undefined;
  }
  getChars(rawOmapiCharacteristics) {
    if (rawOmapiCharacteristics.elementarycharacteristics) {
      return rawOmapiCharacteristics.elementarycharacteristics.map(el => {
        return {
          key: el.key,
          values: el.value.split(','),
          unit: el.unit
        };
      });
    }
    return undefined;
  }
  createConstituents(rawConstituents) {
    return rawConstituents && rawConstituents.map(rawConstituent => {
      return this.createConstituent(rawConstituent);
    });
  }
  createConstituent(rawConstituent) {
    const constituent = {};
    constituent.type = this.normalizationService.normalizeKey(rawConstituent.type);
    constituent.specurl = rawConstituent.specurl;
    constituent.productInfo = this.toModel(rawConstituent.rawOmapi);
    return constituent;
  }
  createVisibilityRules(rawVisibilityrules) {
    const visibilityRules = {};
    if (rawVisibilityrules) {
      visibilityRules.conditionalVisibility = rawVisibilityrules.conditionalvisibility;
    }
    return visibilityRules;
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  getValueUnit(rawData) {
    if (rawData) {
      return {
        unit: rawData.unit,
        value: parseFloat(rawData.value)
      };
    }
    return undefined;
  }
  static #_ = this.ɵfac = function OmapiProductMapper_Factory(t) {
    return new (t || OmapiProductMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.NormalizationService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: OmapiProductMapper,
    factory: OmapiProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 51562:
/*!***************************************************!*\
  !*** ./libs/shared/omapi/src/lib/models/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiPremium: () => (/* reexport safe */ _omapi_premium_model__WEBPACK_IMPORTED_MODULE_0__.OmapiPremium),
/* harmony export */   OmapiProduct: () => (/* reexport safe */ _omapi_product_model__WEBPACK_IMPORTED_MODULE_1__.OmapiProduct),
/* harmony export */   OmapiProductTestfactory: () => (/* reexport safe */ _omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.OmapiProductTestfactory)
/* harmony export */ });
/* harmony import */ var _omapi_premium_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-premium.model */ 34366);
/* harmony import */ var _omapi_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi-product.model */ 25070);
/* harmony import */ var _omapi_product_testfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omapi-product.testfactory */ 61756);




/***/ }),

/***/ 34366:
/*!*****************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/models/omapi-premium.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiPremium: () => (/* binding */ OmapiPremium)
/* harmony export */ });
class OmapiPremium {}

/***/ }),

/***/ 25070:
/*!*****************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/models/omapi-product.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiProduct: () => (/* binding */ OmapiProduct)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 5509);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 25987);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 40913);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ 32176);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ 26763);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ 83233);
/* harmony import */ var _constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/omapi-characteristic.enum */ 19751);
/* harmony import */ var _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/omapi.constants */ 50361);
/* harmony import */ var _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/product.constant */ 80351);
/* harmony import */ var _constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/product-characteristic.enum */ 73188);
/* harmony import */ var _constants_product_price_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/product-price-type.enum */ 72825);
/* harmony import */ var _constants_fiber_products_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/fiber-products.constants */ 93647);







class OmapiProduct {
  constructor() {
    this.getLogoUrl = () => {
      if (this.logo) {
        return this.logo;
      } else if (this.labelKey) {
        const key = this.normalizeKey(this.labelKey);
        return '/content/dam/www-telenet-be/img/self-service/products/' + key + '.png';
      }
      return '';
    };
    this.normalizeKey = key => {
      if (key) {
        return key.replace(/ /g, '-').replace(/\./g, '-').replace(/[^0-9a-zA-Z_-]/g, '').toLowerCase();
      }
      return '';
    };
    this.setInternalCategory();
  }
  priceInclVat() {
    return this.characteristics?.priceInclVat;
  }
  price(exclVAT) {
    return exclVAT ? this.characteristics?.priceExclVat : this.characteristics?.priceInclVat;
  }
  getLocalizedContentNames() {
    const localizedContentNames = {};
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(this.localizedContent)) {
      this.localizedContent?.forEach(item => {
        localizedContentNames[item.locale] = item.name;
      });
    }
    return localizedContentNames;
  }
  hasCategory(searchCategory) {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(this.categories) && this.categories?.some(category => {
      return category.toUpperCase() === searchCategory.toUpperCase();
    });
  }
  setInternalCategory() {
    switch (true) {
      case this.hasCategory(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.OMAPI_CATEGORY_PRE_PAID_MOBILE):
        this.internalCategory = _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.OMAPI_CATEGORY_PRE_PAID_MOBILE;
        break;
      case this.hasCategory(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.OMAPI_CATEGORY_BASE_PRO):
      case this.hasCategory(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.OMAPI_CATEGORY_BASE_PRO_VOICE):
      case this.hasCategory(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.OMAPI_CATEGORY_POST_PAID_MOBILE):
      default:
        this.internalCategory = _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.OMAPI_CATEGORY_POST_PAID_MOBILE;
    }
  }
  hasSpecifications() {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(this.specifications);
  }
  updateRates() {
    this.rates?.forEach(rate => {
      rate.type = this.formatRateType(rate.type);
      rate.isTypeData = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.DATA, rate.type);
      rate.isTypeVoice = (0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.VOICE, rate.type);
    });
  }
  isShowRates() {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.EPC_LIST_TO_SHOW_RATE, searchCategoryName => {
      return this.hasCategory(searchCategoryName) || this.externalProductCode === searchCategoryName;
    });
  }
  getSortedSpecifications() {
    const specifications = [];
    (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.services, service => {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(service.specifications, specification => {
        let updatedSpecification = Object.assign({}, specification);
        updatedSpecification.serviceType = service.serviceType;
        updatedSpecification.id = this.productId;
        updatedSpecification = this.setSpecifications(updatedSpecification);
        specifications.push(updatedSpecification);
      });
    });
    return this.getSortedListByWeight(specifications);
  }
  updateSpecifications() {
    this.specifications?.forEach(specification => {
      if (specification.id === this.productId) {
        this.setSpecifications(specification);
      }
    });
  }
  getEsimCharacteristicValue() {
    return this.getCharacteristic(_constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum.ESIM_AVAILABLE);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCharacteristic(key) {
    // eslint-disable-next-line no-prototype-builtins
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(this.characteristics) && this.characteristics.hasOwnProperty(key)) {
      return this.characteristics?.[key];
    }
    return null;
  }
  getMaxMobileLines() {
    let maxMobileLines = this.getCharacteristic(_constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_3__.ProductCharacteristicEnum.MAX_MOBILE_LINES);
    if (!maxMobileLines) {
      const maxLinesSpecification = this.getServiceSpecificationByLabelKey(_constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiServiceSpecificationLabelKey.SPEC_BUNDLE_MAX_MOBILE_LINES, _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiServiceType.GENERAL);
      maxMobileLines = maxLinesSpecification?.value || null;
    }
    return maxMobileLines;
  }
  getSharedMobileData() {
    const sharedMobileData = this.getCharacteristic(_constants_product_characteristic_enum__WEBPACK_IMPORTED_MODULE_3__.ProductCharacteristicEnum.SHARED_MOBILE_DATA);
    return sharedMobileData && sharedMobileData.value;
  }
  hasUnlimitedCalling() {
    return this.services && this.services.some(service => {
      return service.serviceType.toUpperCase() === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_CALLING && service.specifications?.some(specification => {
        return specification.unit && specification.unit.toUpperCase() === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MINUTES && specification.value && specification.value.toUpperCase() === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.UNLIMITED;
      });
    });
  }
  hasUnlimitedMobileInternet() {
    return this.getConstituent(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_LINE)?.productInfo?.services?.find(service => service?.serviceType === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_INTERNET)?.specifications?.some(s => s.value === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.FUP);
  }
  hasUnlimitedFixedInternet() {
    return this.characteristics?.serviceCategory === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.FUP;
  }
  hasUnlimitedInternetBasedOnLabelKey() {
    return this.services?.find(s => s?.serviceType === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_INTERNET)?.specifications?.some(s => s.labelKey === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiServiceSpecificationLabelKey.MOBILE_INTERNET_UNLIMITED_SHARED_SPEC);
  }
  isWigo() {
    return this.isFmc() && this.getProductSubGroup() === '';
  }
  isFmc() {
    return this.getProductGroup() === _constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiProductGroupEnum.FMC;
  }
  hasServiceType(serviceType) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(this.services, service => {
      return service.serviceType.toUpperCase() === serviceType;
    });
  }
  isBundle() {
    return this.productType === 'BUNDLE';
  }
  isFiber() {
    return !!this.externalProductCode && _constants_fiber_products_constants__WEBPACK_IMPORTED_MODULE_5__.FiberProducts.includes(this.externalProductCode);
  }
  getProductLevel() {
    return this.getCharacteristic(_constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum.PRODUCT_LEVEL);
  }
  getProductTier() {
    return this.getCharacteristic(_constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum.PRODUCT_TIER);
  }
  getConstituents() {
    return this.getCharacteristic(_constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum.CONSTITUENTS) || [];
  }
  getConstituent(type) {
    if (this.getConstituents()) {
      const [constituent] = this.getConstituents().filter(result => result.type === this.normalizeKey(type));
      return constituent;
    }
    return undefined;
  }
  getServiceSpecificationByLabelKey(labelKey, serviceType) {
    if (this.services) {
      const service = serviceType ? this.services.find(specService => specService.serviceType === serviceType) : this.services[0];
      return service && service.specifications && service.specifications.find(specification => {
        return specification.labelKey === this.normalizeKey(labelKey);
      });
    }
    return undefined;
  }
  getBillingCycle() {
    switch (this.priceType) {
      case _constants_product_price_type_enum__WEBPACK_IMPORTED_MODULE_4__.ProductPriceTypeEnum.OMAPI_NON_RECURRENT_CHARGE:
        return _constants_product_price_type_enum__WEBPACK_IMPORTED_MODULE_4__.ProductPriceTypeEnum.ONE_TIME;
      case _constants_product_price_type_enum__WEBPACK_IMPORTED_MODULE_4__.ProductPriceTypeEnum.OMAPI_RECURRENT_CHARGE:
      default:
        return _constants_product_price_type_enum__WEBPACK_IMPORTED_MODULE_4__.ProductPriceTypeEnum.RECURRENT;
    }
  }
  isWhop() {
    return this.productId === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiLegacyProducts.WHOP;
  }
  isWhoppa() {
    return this.productId === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiLegacyProducts.WHOPPA;
  }
  isConnect5() {
    return this.getProductSubGroup() === _constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiProductSubGroupEnum.CONNECT5;
  }
  isConnect5Soho() {
    return this.getProductSubGroup() === _constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiProductSubGroupEnum.CONNECT5_SOHO || this.getProductSubGroup() === _constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiProductSubGroupEnum.KLIK;
  }
  isHighTier() {
    return this.getCharacteristic('productTier') === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiProductTierEnum.HIGH;
  }
  getGroupNameLabel() {
    const {
      productGroup,
      productSubGroup,
      productTier,
      productSegment
    } = this.characteristics;
    if (productGroup && productTier && productSegment) {
      return [productGroup, productSubGroup, productTier, productSegment].filter(productName => productName !== '').map(productName => productName?.toLowerCase()).map(productName => productName?.replace(/\s+/g, '').trim()).join('-');
    }
    return this.services?.map(service => service?.serviceType?.toLowerCase()).join('-');
  }
  getUniqOutOfBundlesLimits() {
    let limits = [];
    if (this.usageLimits) {
      (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(this.usageLimits.outOfBundle.limits, limit => {
        limits = [...limits, ...limit.values];
      });
    }
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"])(limits);
  }
  hasCharKey(key) {
    const charValue = this.fetchCharKey(key);
    return Boolean(charValue);
  }
  getCharValue(key) {
    if (!key) {
      return [];
    }
    const charValue = this.fetchCharKey(key);
    return charValue && charValue.values || [];
  }
  getCharUnit(key) {
    const charValue = this.fetchCharKey(key);
    return charValue && charValue.unit;
  }
  fetchCharKey(key) {
    return this.chars && this.chars.find(char => char.key === key);
  }
  getInternetUsageNotificationThresholds() {
    return this.usagenotifications?.internet;
  }
  getProductGroup() {
    return this.getCharacteristic(_constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum.PRODUCT_GROUP);
  }
  getProductSubGroup() {
    return this.getCharacteristic(_constants_omapi_characteristic_enum__WEBPACK_IMPORTED_MODULE_0__.OmapiCharacteristicEnum.PRODUCT_SUB_GROUP);
  }
  isStreamingServiceContainer() {
    return this.productId === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiDarwinProducts.STREAMING_SERVICE_CONTAINER;
  }
  isNetflixPremiumAddon() {
    return this.productId === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiDarwinProducts.NETFLIX_PREMIUM_ADDON;
  }
  isANetflixProduct() {
    return _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiSubCategoryEnum.NETFLIX === this.subCategory?.name;
  }
  isNetflixStandard() {
    return this.productId === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiDarwinProducts.NETFLIX_STANDARD;
  }
  isDarwinProduct() {
    const STARTS_WITH_NUMBER = /^\d/;
    return this.productId && !this.productId.match(STARTS_WITH_NUMBER) || false;
  }
  isESim() {
    return this.productType === _constants_omapi_constants__WEBPACK_IMPORTED_MODULE_1__.OmapiProductType.E_SIM;
  }
  getSortedListByWeight(list) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(list, _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.WEIGHT);
  }
  formatRateType(type) {
    return type && type.toLowerCase().replace(/ /g, '-');
  }
  setSpecifications(specification) {
    specification.showUnit = false;
    specification.isValue = false;
    specification.isMonetary = false;
    specification.isRange = false;
    specification.isAsterisk = false;
    if (specification.unit && specification.unit.toUpperCase() === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MINUTES) {
      specification.unit = _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MIN;
    }
    switch (specification.serviceType) {
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_CALLING:
        return this.setSpecificationsForMobileCalling(specification);
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_INTERNET:
        return this.setSpecificationsForMobileInternet(specification);
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.MOBILE_MONETARY:
        return this.setSpecificationsForMobileMonetary(specification);
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.FIXED_CALLING:
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.TV:
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.DTV:
        return this.setSpecificationsForFixedVoiceAndTv(specification);
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.INTERNET:
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.FIXED_INTERNET:
        return this.setSpecificationsForInternet(specification);
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.GENERAL:
      case _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.FEATURE:
        return specification;
      default:
        console.error(`Specification not implemented: ${specification?.serviceType}`);
        return specification;
    }
  }
  setSpecificationsForMobileCalling(specification) {
    specification.showUnit = true;
    specification.isValue = true;
    if (specification.value && specification.value.toUpperCase() === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.UNLIMITED) {
      specification.isAsterisk = true;
      specification.showUnit = false;
    }
    if (specification.minValue && specification.maxValue) {
      specification.isValue = false;
      specification.isAsterisk = false;
      specification.isRange = true;
      specification.showUnit = true;
    }
    return specification;
  }
  setSpecificationsForMobileInternet(specification) {
    specification.showUnit = true;
    specification.isValue = true;
    if (specification.value && specification.value.toUpperCase().indexOf(_constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.UNLIMITED) > -1) {
      specification.isAsterisk = true;
      specification.showUnit = false;
    }
    if (specification.minValue && specification.maxValue) {
      specification.isValue = false;
      specification.showUnit = true;
      specification.isRange = true;
    }
    return specification;
  }
  setSpecificationsForMobileMonetary(specification) {
    specification.showUnit = false;
    specification.isMonetary = true;
    specification.isValue = false;
    return specification;
  }
  setSpecificationsForFixedVoiceAndTv(specification) {
    specification.isValue = true;
    specification.showUnit = true;
    specification.isMonetary = false;
    return specification;
  }
  setSpecificationsForInternet(specification) {
    if (specification.value && specification.value.toUpperCase() === _constants_product_constant__WEBPACK_IMPORTED_MODULE_2__.ProductConstants.UNLIMITED) {
      specification.isAsterisk = true;
      specification.showUnit = false;
    } else {
      specification.showUnit = true;
    }
    specification.isValue = true;
    specification.isMonetary = false;
    return specification;
  }
}

/***/ }),

/***/ 61756:
/*!***********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/models/omapi-product.testfactory.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiProductTestfactory: () => (/* binding */ OmapiProductTestfactory)
/* harmony export */ });
/* harmony import */ var _omapi_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-product.model */ 25070);

class OmapiProductTestfactory {
  static build(properties = {}) {
    const omapiProduct = new _omapi_product_model__WEBPACK_IMPORTED_MODULE_0__.OmapiProduct();
    omapiProduct.name = properties.name || 'Wigo';
    omapiProduct.productType = properties.productType || 'OTHER';
    omapiProduct.characteristics = properties.characteristics || {};
    omapiProduct.productConstituents = properties.productConstituents || {};
    omapiProduct.services = properties.services || [];
    omapiProduct.productId = properties.productId || '123';
    omapiProduct.weight = properties.weight || 1;
    omapiProduct.localizedContent = properties.localizedContent || [];
    omapiProduct.externalProductCode = '95465432165';
    omapiProduct.logo = properties.logo;
    omapiProduct.subCategory = properties.subCategory;
    return omapiProduct;
  }
}

/***/ }),

/***/ 44852:
/*!*************************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/services/cache/omapi-cache.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiCacheService: () => (/* binding */ OmapiCacheService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class OmapiCacheService {
  constructor() {
    this.cache = {};
  }
  get(key) {
    return this.cache[key];
  }
  add(key, response$) {
    this.cache[key] = response$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.shareReplay)({
      bufferSize: 1,
      refCount: false
    }));
  }
  remove(key) {
    delete this.cache[key];
  }
  static #_ = this.ɵfac = function OmapiCacheService_Factory(t) {
    return new (t || OmapiCacheService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OmapiCacheService,
    factory: OmapiCacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 55270:
/*!*****************************************************!*\
  !*** ./libs/shared/omapi/src/lib/services/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiCacheService: () => (/* reexport safe */ _cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_4__.OmapiCacheService),
/* harmony export */   OmapiEnrichService: () => (/* reexport safe */ _omapi_enrich_service__WEBPACK_IMPORTED_MODULE_0__.OmapiEnrichService),
/* harmony export */   OmapiFamilyService: () => (/* reexport safe */ _omapi_family_service__WEBPACK_IMPORTED_MODULE_1__.OmapiFamilyService),
/* harmony export */   OmapiPremiumService: () => (/* reexport safe */ _omapi_premium_service__WEBPACK_IMPORTED_MODULE_2__.OmapiPremiumService),
/* harmony export */   OmapiProductService: () => (/* reexport safe */ _omapi_product_service__WEBPACK_IMPORTED_MODULE_3__.OmapiProductService)
/* harmony export */ });
/* harmony import */ var _omapi_enrich_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-enrich.service */ 5545);
/* harmony import */ var _omapi_family_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi-family.service */ 81378);
/* harmony import */ var _omapi_premium_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omapi-premium.service */ 32634);
/* harmony import */ var _omapi_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./omapi-product.service */ 99721);
/* harmony import */ var _cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache/omapi-cache.service */ 44852);






/***/ }),

/***/ 5545:
/*!********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/services/omapi-enrich.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiEnrichService: () => (/* binding */ OmapiEnrichService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 48717);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _omapi_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omapi-product.service */ 99721);
/* harmony import */ var _mappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mappers */ 29170);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ 28253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);









class OmapiEnrichService {
  constructor(omapiProductService, omapiProductMapper) {
    this.omapiProductService = omapiProductService;
    this.omapiProductMapper = omapiProductMapper;
  }
  enrichResponseWithOmapiData(messageGroup, response) {
    const copy = (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(response);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(this.getOmapiObservables(messageGroup, copy)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(() => copy));
  }
  getOmapiObservables(messageGroup, data, specUrls = []) {
    if (data === undefined || data === null) {
      return specUrls;
    }
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'specurl') {
        const sofyComboProduct = _utils__WEBPACK_IMPORTED_MODULE_4__.OmapiUtils.getComboProducts(data.omapiid);
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(sofyComboProduct)) {
          const omapiProduct$ = this.omapiProductService
          // eslint-disable-next-line @typescript-eslint/ban-types
          .getProductByEndpoint(messageGroup, value.toString()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(omapiProduct => {
            data['productInfo'] = omapiProduct;
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(() => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(undefined);
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.switchMap)(omapiProduct => this.enrichConstituents(messageGroup, omapiProduct)));
          specUrls.push(omapiProduct$);
        } else {
          data['productInfo'] = this.omapiProductMapper.toModel({
            product: sofyComboProduct
          });
        }
      }
      if (typeof value === 'object') {
        this.getOmapiObservables(messageGroup, value, specUrls);
      }
    });
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])(specUrls)) {
      return [(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data)];
    }
    return specUrls;
  }
  enrichConstituents(messageGroup, product) {
    if (product === undefined || product.getConstituents().length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(product.getConstituents().map(constituentInterface => {
      return this.omapiProductService.getProductByEndpoint(messageGroup, constituentInterface.specurl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(omapiProduct => {
        constituentInterface.productInfo = omapiProduct;
      }));
    }));
  }
  static #_ = this.ɵfac = function OmapiEnrichService_Factory(t) {
    return new (t || OmapiEnrichService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_omapi_product_service__WEBPACK_IMPORTED_MODULE_2__.OmapiProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_mappers__WEBPACK_IMPORTED_MODULE_3__.OmapiProductMapper));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: OmapiEnrichService,
    factory: OmapiEnrichService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 81378:
/*!********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/services/omapi-family.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiFamilyService: () => (/* binding */ OmapiFamilyService)
/* harmony export */ });
/* harmony import */ var _Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ 30144);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _omapi_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./omapi-product.service */ 99721);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ 44610);
/* harmony import */ var _cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cache/omapi-cache.service */ 44852);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils */ 28253);
/* harmony import */ var rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/internal/firstValueFrom */ 60331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_11__);












/* eslint-disable rxjs/no-internal */








class OmapiFamilyService {
  // FIXME this service has to be refactored - its full of promises being created out of an observable
  constructor(http, urlService, messageService, configService, cacheService, omapiProductService) {
    this.http = http;
    this.urlService = urlService;
    this.messageService = messageService;
    this.configService = configService;
    this.cacheService = cacheService;
    this.omapiProductService = omapiProductService;
  }
  getFamily(messageGroup, family) {
    return this.getFamilyByEndpoint(messageGroup, this.getOmapiFamilyUrl(family));
  }
  getKlikFamily(messageGroup, family) {
    return this.getKlikFamilyByEndpoint(messageGroup, this.getOmapiFamilyUrl(family));
  }
  getOmapiFamilyUrl(family) {
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__.ConfigConstants.OMAPI_URL) + '/public/family/' + family;
  }
  getFamilyByEndpoint(messageGroup, endpoint) {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
    }
    const productInfoPromises = [];
    return this.cacheService.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rawOmapiFamily => {
      return this.parseFamily(messageGroup, rawOmapiFamily, productInfoPromises);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)( /*#__PURE__*/function () {
      var _ref = (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (omapiFamily) {
        yield Promise.all(productInfoPromises);
        return omapiFamily;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => this.handleError(error, messageGroup)));
  }
  parseFamily(messageGroup, rawOmapiFamily, productInfoPromises) {
    const omapiFamily = {
      tiers: []
    };
    this.parseTiers(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    this.parseProductsByType(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    this.parseOptins(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    if (rawOmapiFamily.options) {
      this.parseOptions(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises);
    }
    return omapiFamily;
  }
  parseTiers(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
    rawOmapiFamily.tiers.forEach(tier => {
      omapiFamily.tiers.push(this.createTier(messageGroup, tier, productInfoPromises));
    });
  }
  parseProductsByType(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
    _constants__WEBPACK_IMPORTED_MODULE_8__.OmapiFamilyConstants.FAMILY_PRODUCT_TYPES.forEach(productType => {
      const product = rawOmapiFamily.products.find(rawOmapiFamilyProduct => rawOmapiFamilyProduct.type === productType);
      if (product) {
        this.addOmapiProductToTier(messageGroup, product, omapiFamily, productInfoPromises);
      }
    });
  }
  parseOptins(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
    omapiFamily.tiers.forEach(omapiFamilyTier => {
      if (omapiFamilyTier) {
        omapiFamilyTier.optins = (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(rawOmapiFamily.optins.map(rawOptin => {
          const key = rawOptin.key;
          const currentTier = rawOptin.tiers.find(tier => tier.key === omapiFamilyTier.key);
          return currentTier?.pax?.map(pax => {
            const optin = {};
            optin.key = key;
            optin.mobileId = pax.omapiId;
            optin.omapiId = pax.optinId;
            const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, pax.optinId));
            productInfoPromises.push(promise);
            promise.then(omapiProduct => {
              optin.productInfo = omapiProduct;
            });
            return optin;
          }) ?? [];
        }));
      }
    });
  }
  parseOptions(messageGroup, rawOmapiFamily, omapiFamily, productInfoPromises) {
    omapiFamily.tiers.forEach(omapiFamilyTier => {
      omapiFamilyTier.options = (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])(rawOmapiFamily.options.map(rawOption => {
        const option = {};
        option.key = rawOption.key;
        option.type = rawOption.type;
        option.omapiId = rawOption.omapiId;
        option.parents = rawOption.parents;
        const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawOption.omapiId));
        productInfoPromises.push(promise);
        promise.then(omapiProduct => {
          option.productInfo = omapiProduct;
        });
        return option;
      }));
    });
  }
  addOmapiProductToTier(messageGroup, rawOmapiFamilyProduct, omapiFamily, productInfoPromises) {
    rawOmapiFamilyProduct.tiers.forEach(rawOmapiProductTier => {
      this.addOmapiFamilyObjectToTier(messageGroup, omapiFamily, rawOmapiFamilyProduct.type, rawOmapiProductTier, productInfoPromises);
    });
  }
  addOmapiFamilyObjectToTier(messageGroup, family, productType, rawOmapiProductTier, productInfoPromises) {
    const familyTier = family.tiers.find(tier => tier.key === rawOmapiProductTier.key);
    const omapiProductInfos = this.createOmapiProductInfos(messageGroup, rawOmapiProductTier, productInfoPromises);
    if (familyTier) {
      if (!familyTier[productType]) {
        familyTier[productType] = [];
      }
      familyTier[productType] = familyTier[productType].concat(omapiProductInfos);
    }
  }
  createOmapiProductInfos(messageGroup, rawOmapiProductTier, productInfoPromises) {
    const products = [];
    let mobileData = [];
    rawOmapiProductTier.products.forEach(rawOmapiProduct => {
      const omapiProductInfo = {
        omapiId: rawOmapiProduct.omapiId
      };
      if (rawOmapiProduct.mobileData) {
        rawOmapiProduct.mobileData.forEach(rawMobileData => {
          const omapiMobileData = {};
          omapiMobileData.omapiId = rawMobileData.omapiId;
          omapiMobileData.key = rawMobileData.key;
          const omapiMobileDataPromises = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, omapiMobileData.omapiId));
          productInfoPromises.push(omapiMobileDataPromises);
          omapiMobileDataPromises.then(omapiProduct => {
            omapiMobileData.productInfo = omapiProduct;
          });
          mobileData.push(omapiMobileData);
        });
      }
      if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils__WEBPACK_IMPORTED_MODULE_10__.OmapiUtils.getComboProducts(rawOmapiProduct.omapiId))) {
        const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawOmapiProduct.omapiId));
        productInfoPromises.push(promise);
        promise.then(omapiProduct => {
          omapiProductInfo.productInfo = omapiProduct;
        });
      }
      omapiProductInfo.mobileData = mobileData;
      products.push(omapiProductInfo);
      mobileData = [];
    });
    return products;
  }
  createTier(messageGroup, rawOmapiTier, productInfoPromises) {
    const tier = {
      omapiId: rawOmapiTier.omapiId,
      key: rawOmapiTier.key
    };
    const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawOmapiTier.omapiId));
    productInfoPromises.push(promise);
    promise.then(omapiProduct => {
      tier.productInfo = omapiProduct;
    });
    return tier;
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
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => 'An error occurred while trying to fetch ' + messageGroup);
  }
  getKlikFamilyByEndpoint(messageGroup, endpoint) {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
    }
    const productInfoPromises = [];
    return this.cacheService.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => this.handleError(error, messageGroup)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rawOmapiFamily => {
      return this.createFamily(messageGroup, rawOmapiFamily, productInfoPromises);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)( /*#__PURE__*/function () {
      var _ref2 = (0,_Users_lotte_Documents_Telenet_customer_web_monorepo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (omapiFamily) {
        yield Promise.all(productInfoPromises);
        return omapiFamily;
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()));
  }
  createFamily(messageGroup, rawOmapiFamily, productInfoPromises) {
    const omapiFamily = {};
    omapiFamily.tiers = this.createKlikTier(rawOmapiFamily.tiers, messageGroup, productInfoPromises);
    omapiFamily.products = this.createKlikProduct(rawOmapiFamily.products, messageGroup, productInfoPromises);
    omapiFamily.optins = this.createKlikOptins(rawOmapiFamily.optins, messageGroup, productInfoPromises);
    omapiFamily.options = this.createKlikOptions(rawOmapiFamily.options, messageGroup, productInfoPromises);
    return omapiFamily;
  }
  createKlikTier(rawOmapiFamilyTier, messageGroup, productInfoPromises) {
    return rawOmapiFamilyTier.map(rawFamilyTier => {
      const tier = {};
      tier.key = rawFamilyTier.key;
      tier.omapiId = rawFamilyTier.omapiId;
      const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawFamilyTier.omapiId));
      productInfoPromises.push(promise);
      promise.then(omapiProduct => {
        tier.productInfo = omapiProduct;
      });
      return tier;
    });
  }
  createKlikProduct(rawOmapiFamilyProduct, messageGroup, productInfoPromises) {
    return rawOmapiFamilyProduct.map(rawFamilyProduct => {
      const product = {};
      product.type = rawFamilyProduct.type;
      product.tiers = this.getProductTiers(rawFamilyProduct, messageGroup, productInfoPromises);
      return product;
    });
  }
  createKlikOptins(rawOmapiFamilyOptIn, messageGroup, productInfoPromises) {
    return rawOmapiFamilyOptIn.map(rawOptins => {
      const optin = {};
      optin.key = rawOptins.key;
      optin.tiers = [];
      optin.tiers = rawOptins.tiers?.map(rawTier => {
        const optinTier = {};
        optinTier.key = rawTier.key;
        optinTier.pax = [];
        optinTier.pax = rawTier.pax?.map(rawPax => {
          const optinPax = {};
          optinPax.omapiId = rawPax.omapiId;
          optinPax.optinId = rawPax.optinId;
          const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawPax.optinId));
          productInfoPromises.push(promise);
          promise.then(omapiProduct => {
            optinPax.productInfo = omapiProduct;
          });
          return optinPax;
        });
        return optinTier;
      });
      return optin;
    });
  }
  createKlikOptions(rawOmapiFamilyOptIn, messageGroup, productInfoPromises) {
    return rawOmapiFamilyOptIn.map(rawOption => {
      const option = {};
      option.key = rawOption.key;
      option.omapiId = rawOption.omapiId;
      option.parents = rawOption.parents;
      option.type = rawOption.type;
      const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawOption.omapiId));
      productInfoPromises.push(promise);
      promise.then(omapiProduct => {
        option.productInfo = omapiProduct;
      });
      return option;
    });
  }
  getProductTiers(rawFamilyProduct, messageGroup, productInfoPromises) {
    return rawFamilyProduct.tiers?.map(rawTier => {
      const tier = {};
      tier.key = rawTier.key;
      tier.products = this.getProductDetails(rawTier, messageGroup, productInfoPromises);
      return tier;
    });
  }
  getProductDetails(rawTier, messageGroup, productInfoPromises) {
    return rawTier.products?.map(rawTierProduct => {
      const tierProduct = {};
      tierProduct.key = rawTierProduct.key;
      tierProduct.omapiId = rawTierProduct.omapiId;
      const promise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawTierProduct.omapiId));
      productInfoPromises.push(promise);
      promise.then(omapiProduct => {
        tierProduct.productInfo = omapiProduct;
      });
      tierProduct.mobileData = this.getMobileData(rawTierProduct, messageGroup, productInfoPromises);
      return tierProduct;
    });
  }
  getMobileData(rawTierProduct, messageGroup, productInfoPromises) {
    return rawTierProduct.mobileData?.map(rawTierProductMobile => {
      const mobileData = {};
      mobileData.key = rawTierProductMobile.key;
      mobileData.omapiId = rawTierProductMobile.omapiId;
      const mobileDataPromise = (0,rxjs_internal_firstValueFrom__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.omapiProductService.getProductById(messageGroup, rawTierProductMobile.omapiId));
      productInfoPromises.push(mobileDataPromise);
      mobileDataPromise.then(omapiProduct => {
        mobileData.productInfo = omapiProduct;
      });
      return mobileData;
    });
  }
  static #_ = this.ɵfac = function OmapiFamilyService_Factory(t) {
    return new (t || OmapiFamilyService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_5__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_9__.OmapiCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_omapi_product_service__WEBPACK_IMPORTED_MODULE_7__.OmapiProductService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: OmapiFamilyService,
    factory: OmapiFamilyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 32634:
/*!*********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/services/omapi-premium.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiPremiumService: () => (/* binding */ OmapiPremiumService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mappers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mappers */ 29170);
/* harmony import */ var _cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cache/omapi-cache.service */ 44852);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);
















class OmapiPremiumService {
  constructor(http, omapiPremiumMapper, urlService, cacheService, configService, messageService) {
    this.http = http;
    this.omapiPremiumMapper = omapiPremiumMapper;
    this.urlService = urlService;
    this.cacheService = cacheService;
    this.configService = configService;
    this.messageService = messageService;
    this.log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.LogFactory.createLogger(OmapiPremiumService);
    this.gatewayUrl = this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigConstants.OMAPI_URL);
  }
  getOmapiPremium(messageGroup, epc, showCustomError, errorLabelKey) {
    if (!this.cacheService.get(epc)) {
      this.cacheService.add(epc, this.http.get(this.getPremiumEndpoint(epc), this.getHttpConfig()));
    }
    return this.cacheService.get(epc).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => this.handleError(error, messageGroup, showCustomError, errorLabelKey)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      return this.omapiPremiumMapper.toModel(response);
    }));
  }
  handleError(error, messageGroup, showCustomError, errorLabelKey) {
    if (showCustomError && errorLabelKey) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage(messageGroup, errorLabelKey));
    } else if (error.status !== 410) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    this.log.logError('An error occurred while trying to fetch ' + messageGroup, error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => 'An error occurred while trying to fetch ' + messageGroup);
  }
  getPremiumEndpoint(epc) {
    return `${this.gatewayUrl}/public/premium/${epc}`;
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
  static #_ = this.ɵfac = function OmapiPremiumService_Factory(t) {
    return new (t || OmapiPremiumService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_mappers__WEBPACK_IMPORTED_MODULE_6__.OmapiPremiumMapper), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_2__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_7__.OmapiCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_3__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: OmapiPremiumService,
    factory: OmapiPremiumService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99721:
/*!*********************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/services/omapi-product.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiProductService: () => (/* binding */ OmapiProductService)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mappers_omapi_product_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mappers/omapi-product.mapper */ 65865);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @telenet/ng-lib-message */ 65145);
/* harmony import */ var _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cache/omapi-cache.service */ 44852);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @telenet/ng-lib-shared */ 77157);
/* harmony import */ var _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_9__);

















class OmapiProductService {
  constructor(http, urlService, messageService, omapiProductMapper, cacheService, configService) {
    this.http = http;
    this.urlService = urlService;
    this.messageService = messageService;
    this.omapiProductMapper = omapiProductMapper;
    this.cacheService = cacheService;
    this.configService = configService;
    this.log = _telenet_ng_lib_shared__WEBPACK_IMPORTED_MODULE_8__.LogFactory.createLogger(OmapiProductService);
    this.FETCH_ERROR_PREFIX = 'An error occurred while trying to fetch ';
  }
  getProductByEPC(messageGroup, epc) {
    const endpoint = this.getProductEndpoint(epc);
    return this.http.get(endpoint, this.getHttpConfig()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => this.handleError(error, messageGroup)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return this.omapiProductMapper.toModel(response);
    }));
  }
  getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError = false) {
    if (!this.cacheService.get(endpoint)) {
      this.cacheService.add(endpoint, this.http.get(endpoint, this.getHttpConfig()));
    }
    return this.cacheService.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => silentlyHandleError ? this.handleErrorSilent(error, messageGroup) : this.handleError(error, messageGroup)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(response => {
      return this.addConstituentsToOmapiResponse(response, messageGroup);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return response;
    }));
  }
  rawProductsFromEndpoints$(messageGroup, endpoints, silentlyHandleError = false) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(endpoints, endpoint => this.getRawProductByEndpoint(messageGroup, endpoint, silentlyHandleError))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(omapiResponses => omapiResponses.filter(omapiResponse => omapiResponse !== undefined)));
  }
  getProductByEndpoint(messageGroup, endpoint) {
    return this.doGet(messageGroup, endpoint);
  }
  // to do cleanup (method name getProductById), maybe method for the hardcoded url
  getProductById(messageGroup, omapiId) {
    return this.doGet(messageGroup, this.getOmapiProductUrl(omapiId));
  }
  addConstituentsToOmapiResponse(rawOmapiResponse, messageGroup) {
    if (rawOmapiResponse?.product && rawOmapiResponse.product.characteristics && rawOmapiResponse.product.characteristics.constituents) {
      return this.resolveConstituents(rawOmapiResponse.product.characteristics.constituents, messageGroup).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        if (rawOmapiResponse?.product?.characteristics) {
          rawOmapiResponse.product.characteristics.constituents = response;
        }
        return rawOmapiResponse;
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(rawOmapiResponse);
    }
  }
  getOmapiProductUrl(omapiId) {
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__.ConfigConstants.OMAPI_URL) + '/public/product/' + omapiId;
  }
  doGet(messageGroup, endpoint) {
    if (!this.cacheService.get(endpoint)) {
      const httpObservable$ = this.http.get(endpoint, this.getHttpConfig());
      this.cacheService.add(endpoint, httpObservable$);
    }
    return this.cacheService.get(endpoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => this.handleError(error, messageGroup)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      return this.omapiProductMapper.toModel(response);
    }));
  }
  resolveConstituents(constituents, messageGroup) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)((0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(constituents, constituent => this.resolveConstituent(constituent, messageGroup)));
  }
  resolveConstituent(constituent, messageGroup) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)({
      specurl: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(constituent.specurl),
      type: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(constituent.type),
      rawOmapi: this.getRawProductByEndpoint(messageGroup, constituent.specurl, false)
    });
  }
  getProductEndpoint(epc) {
    return `${this.gatewayUrl}/omapi/public/product/${epc}`;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error, messageGroup) {
    if (error.status !== 410) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => this.FETCH_ERROR_PREFIX + messageGroup);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleErrorSilent(error, messageGroup) {
    if (error.status !== 410) {
      this.messageService.addMessage(new _telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage(messageGroup, 'omapi-' + error.status));
    }
    this.log.logError(this.FETCH_ERROR_PREFIX + messageGroup, error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined);
  }
  static #_ = this.ɵfac = function OmapiProductService_Factory(t) {
    return new (t || OmapiProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_4__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_message__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_mappers_omapi_product_mapper__WEBPACK_IMPORTED_MODULE_2__.OmapiProductMapper), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_cache_omapi_cache_service__WEBPACK_IMPORTED_MODULE_7__.OmapiCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_6__.ConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: OmapiProductService,
    factory: OmapiProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28253:
/*!**************************************************!*\
  !*** ./libs/shared/omapi/src/lib/utils/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiFamilyUtils: () => (/* reexport safe */ _omapi_family_utils__WEBPACK_IMPORTED_MODULE_0__.OmapiFamilyUtils),
/* harmony export */   OmapiUtils: () => (/* reexport safe */ _omapi_utils__WEBPACK_IMPORTED_MODULE_1__.OmapiUtils)
/* harmony export */ });
/* harmony import */ var _omapi_family_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omapi-family.utils */ 39756);
/* harmony import */ var _omapi_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omapi.utils */ 36558);



/***/ }),

/***/ 39756:
/*!***************************************************************!*\
  !*** ./libs/shared/omapi/src/lib/utils/omapi-family.utils.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiFamilyUtils: () => (/* binding */ OmapiFamilyUtils)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 44610);

class OmapiFamilyUtils {
  static getFamilyTier(omapiId, omapiFamily) {
    const family = Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.OmapiFamilyTierEnum).find(family => this.isOmapiIdInTier(omapiId, family, omapiFamily));
    return family ? family : _constants__WEBPACK_IMPORTED_MODULE_0__.OmapiFamilyTierEnum.FAST;
  }
  static isOmapiIdInTier(omapiId, familyTier, omapiFamily) {
    const omapiFamilyTier = omapiFamily.tiers.find(tier => {
      return tier.key === familyTier;
    });
    if (omapiFamilyTier === undefined) {
      return false;
    }
    const strings = omapiFamilyTier.mobile?.map(mobile => {
      return mobile.omapiId;
    }) ?? [];
    strings.push(omapiFamilyTier.omapiId);
    return strings.indexOf(omapiId) > -1;
  }
}

/***/ }),

/***/ 36558:
/*!********************************************************!*\
  !*** ./libs/shared/omapi/src/lib/utils/omapi.utils.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OmapiUtils: () => (/* binding */ OmapiUtils)
/* harmony export */ });
/* harmony import */ var _constants_sofy_combo_products_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/sofy-combo-products.constants */ 67919);

class OmapiUtils {
  static doesContainProductWithProvidedOmapiId(productsWithOmapiIds, omapiId) {
    return productsWithOmapiIds.some(product => product.omapiid === omapiId);
  }
  static getLocalizedContent(language, omapiProduct) {
    return omapiProduct.localizedContent?.find(value => {
      return language.valueOf() === value.locale;
    });
  }
  static getComboProducts(omapiId) {
    return _constants_sofy_combo_products_constants__WEBPACK_IMPORTED_MODULE_0__.SofyComboProducts.find(product => {
      return product.productid === omapiId;
    });
  }
}

/***/ }),

/***/ 60331:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 31967);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 36228:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayIncludes.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIndexOf.js */ 79994);


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && (0,_baseIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, 0) > -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludes);

/***/ }),

/***/ 20958:
/*!******************************************************!*\
  !*** ./node_modules/lodash-es/_arrayIncludesWith.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayIncludesWith);

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

/***/ 78607:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseFlatten.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isFlattenable.js */ 28336);



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
    length = array.length;
  predicate || (predicate = _isFlattenable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFlatten);

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

/***/ 62538:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseOrderBy.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ 64987);
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseGet.js */ 31527);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_baseMap.js */ 10650);
/* harmony import */ var _baseSortBy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_baseSortBy.js */ 45223);
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseUnary.js */ 87523);
/* harmony import */ var _compareMultiple_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_compareMultiple.js */ 5537);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity.js */ 25416);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function (iteratee) {
      if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee)) {
        return function (value) {
          return (0,_baseGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
      }
      return iteratee;
    });
  } else {
    iteratees = [_identity_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
  }
  var index = -1;
  iteratees = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, (0,_baseUnary_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_5__["default"]));
  var result = (0,_baseMap_js__WEBPACK_IMPORTED_MODULE_6__["default"])(collection, function (value, key, collection) {
    var criteria = (0,_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function (iteratee) {
      return iteratee(value);
    });
    return {
      'criteria': criteria,
      'index': ++index,
      'value': value
    };
  });
  return (0,_baseSortBy_js__WEBPACK_IMPORTED_MODULE_7__["default"])(result, function (object, other) {
    return (0,_compareMultiple_js__WEBPACK_IMPORTED_MODULE_8__["default"])(object, other, orders);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseOrderBy);

/***/ }),

/***/ 45223:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseSortBy.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;
  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSortBy);

/***/ }),

/***/ 84560:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseUniq.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_SetCache.js */ 77081);
/* harmony import */ var _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayIncludes.js */ 36228);
/* harmony import */ var _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayIncludesWith.js */ 20958);
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cacheHas.js */ 44066);
/* harmony import */ var _createSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_createSet.js */ 78809);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_setToArray.js */ 60974);







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
    includes = _arrayIncludes_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    length = array.length,
    isCommon = true,
    result = [],
    seen = result;
  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : (0,_createSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
    if (set) {
      return (0,_setToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(set);
    }
    isCommon = false;
    includes = _cacheHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
    seen = new _SetCache_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  } else {
    seen = iteratee ? [] : result;
  }
  outer: while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value;
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUniq);

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

/***/ 84977:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_compareAscending.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 67380);


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
      valIsNull = value === null,
      valIsReflexive = value === value,
      valIsSymbol = (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
    var othIsDefined = other !== undefined,
      othIsNull = other === null,
      othIsReflexive = other === other,
      othIsSymbol = (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAscending);

/***/ }),

/***/ 5537:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_compareMultiple.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compareAscending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_compareAscending.js */ 84977);


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
    objCriteria = object.criteria,
    othCriteria = other.criteria,
    length = objCriteria.length,
    ordersLength = orders.length;
  while (++index < length) {
    var result = (0,_compareAscending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareMultiple);

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

/***/ 78809:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_createSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Set.js */ 23684);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop.js */ 87183);
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setToArray.js */ 60974);




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set_js__WEBPACK_IMPORTED_MODULE_0__["default"] && 1 / (0,_setToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(new _Set_js__WEBPACK_IMPORTED_MODULE_0__["default"]([, -0]))[1] == INFINITY) ? _noop_js__WEBPACK_IMPORTED_MODULE_2__["default"] : function (values) {
  return new _Set_js__WEBPACK_IMPORTED_MODULE_0__["default"](values);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSet);

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

/***/ 28336:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_isFlattenable.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ 82134);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);




/** Built-in value references. */
var spreadableSymbol = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFlattenable);

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

/***/ 30144:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/flatMap.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFlatten.js */ 78607);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ 3715);



/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_map_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, iteratee), 1);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatMap);

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

/***/ 87183:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/noop.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noop);

/***/ }),

/***/ 83233:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/sortBy.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseFlatten.js */ 78607);
/* harmony import */ var _baseOrderBy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseOrderBy.js */ 62538);
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ 15736);
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ 79154);





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return (0,_baseOrderBy_js__WEBPACK_IMPORTED_MODULE_2__["default"])(collection, (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratees, 1), []);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortBy);

/***/ }),

/***/ 26763:
/*!****************************************!*\
  !*** ./node_modules/lodash-es/uniq.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseUniq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseUniq.js */ 84560);


/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return array && array.length ? (0,_baseUniq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array) : [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uniq);

/***/ })

}])
//# sourceMappingURL=default-libs_shared_omapi_src_index_ts.js.map