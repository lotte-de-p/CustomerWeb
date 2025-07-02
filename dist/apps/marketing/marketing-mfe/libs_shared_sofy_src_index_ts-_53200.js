(self["webpackChunkmarketing_mfe"] = self["webpackChunkmarketing_mfe"] || []).push([["libs_shared_sofy_src_index_ts-_53200"],{

/***/ 43361:
/*!***************************************!*\
  !*** ./libs/shared/sofy/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.Address),
/* harmony export */   CafeModemDetailModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.CafeModemDetailModel),
/* harmony export */   CafeModemDetailsModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.CafeModemDetailsModel),
/* harmony export */   CafeRawCustomerproductholdingModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.CafeRawCustomerproductholdingModel),
/* harmony export */   CafeRawCustomerproductholdingOptionModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.CafeRawCustomerproductholdingOptionModel),
/* harmony export */   CafeRawCustomerproductholdingRawomapiModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.CafeRawCustomerproductholdingRawomapiModel),
/* harmony export */   CafeRawCustomerproductholdingRawomapiProductModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.CafeRawCustomerproductholdingRawomapiProductModel),
/* harmony export */   ConnectFiveConstants: () => (/* reexport safe */ _lib_constants_connect_five_constants__WEBPACK_IMPORTED_MODULE_1__.ConnectFiveConstants),
/* harmony export */   CostMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.CostMapper),
/* harmony export */   FlowTypeEnum: () => (/* reexport safe */ _lib_enums_flow_type_enum__WEBPACK_IMPORTED_MODULE_3__.FlowTypeEnum),
/* harmony export */   InstallTypeEnum: () => (/* reexport safe */ _lib_enums_ocapi_move_order_enum__WEBPACK_IMPORTED_MODULE_2__.InstallTypeEnum),
/* harmony export */   InstallTypeMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.InstallTypeMapper),
/* harmony export */   InstallTypeModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.InstallTypeModel),
/* harmony export */   OptionMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.OptionMapper),
/* harmony export */   OptionModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.OptionModel),
/* harmony export */   PeriodModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.PeriodModel),
/* harmony export */   ProductMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.ProductMapper),
/* harmony export */   ProductModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.ProductModel),
/* harmony export */   PromoMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.PromoMapper),
/* harmony export */   PromoModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.PromoModel),
/* harmony export */   PromoModelTestfactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.PromoModelTestfactory),
/* harmony export */   Promotion: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.Promotion),
/* harmony export */   SAFE_SPOT_PRO: () => (/* reexport safe */ _lib_constants_sofy_constants__WEBPACK_IMPORTED_MODULE_0__.SAFE_SPOT_PRO),
/* harmony export */   SalesOfferCost: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SalesOfferCost),
/* harmony export */   SalesOfferInstallTypeUtil: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_10__.SalesOfferInstallTypeUtil),
/* harmony export */   SalesOfferMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.SalesOfferMapper),
/* harmony export */   SalesOfferModel: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SalesOfferModel),
/* harmony export */   SalesOfferProductOptinUtil: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_10__.SalesOfferProductOptinUtil),
/* harmony export */   SalesOfferProductType: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SalesOfferProductType),
/* harmony export */   SalesOfferProductUtil: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_10__.SalesOfferProductUtil),
/* harmony export */   SalesOfferPromoUtil: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_10__.SalesOfferPromoUtil),
/* harmony export */   SalesOfferSetupModelFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SalesOfferSetupModelFactory),
/* harmony export */   SalesOfferUtil: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_10__.SalesOfferUtil),
/* harmony export */   SelfInstallTypeEnum: () => (/* reexport safe */ _lib_enums_self_install_type_enum__WEBPACK_IMPORTED_MODULE_4__.SelfInstallTypeEnum),
/* harmony export */   ServiceTypeEnum: () => (/* reexport safe */ _lib_enums_service_type_enum__WEBPACK_IMPORTED_MODULE_5__.ServiceTypeEnum),
/* harmony export */   SofyAddress: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SofyAddress),
/* harmony export */   SofyCustomerProductHoldingProduct: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SofyCustomerProductHoldingProduct),
/* harmony export */   SofyCustomerProductHoldingProductMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.SofyCustomerProductHoldingProductMapper),
/* harmony export */   SofyModemDetails: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SofyModemDetails),
/* harmony export */   SofyModemDetailsMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.SofyModemDetailsMapper),
/* harmony export */   SofyProduct: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.SofyProduct),
/* harmony export */   SofyProductMapper: () => (/* reexport safe */ _lib_mappers__WEBPACK_IMPORTED_MODULE_6__.SofyProductMapper),
/* harmony export */   SofyPromoType: () => (/* reexport safe */ _lib_constants_sofy_constants__WEBPACK_IMPORTED_MODULE_0__.SofyPromoType),
/* harmony export */   SofyService: () => (/* reexport safe */ _lib_services__WEBPACK_IMPORTED_MODULE_8__.SofyService),
/* harmony export */   salesOfferCostFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferCostFactory),
/* harmony export */   salesOfferError: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferError),
/* harmony export */   salesOfferProductComfortInstallTypeFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductComfortInstallTypeFactory),
/* harmony export */   salesOfferProductFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductFactory),
/* harmony export */   salesOfferProductOptinFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductOptinFactory),
/* harmony export */   salesOfferProductOptionFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductOptionFactory),
/* harmony export */   salesOfferProductPreInstallTypeFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductPreInstallTypeFactory),
/* harmony export */   salesOfferProductSelfInstallTypeFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductSelfInstallTypeFactory),
/* harmony export */   salesOfferProductStreamingServiceFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferProductStreamingServiceFactory),
/* harmony export */   salesOfferPromoFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferPromoFactory),
/* harmony export */   salesOfferPromoPeriodFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferPromoPeriodFactory),
/* harmony export */   salesOfferStandaloneOptionsFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferStandaloneOptionsFactory),
/* harmony export */   salesOfferTestFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferTestFactory),
/* harmony export */   salesOfferTestStandaloneOptionsFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.salesOfferTestStandaloneOptionsFactory),
/* harmony export */   sofyAddressFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.sofyAddressFactory),
/* harmony export */   sofyCustomerProductHoldingProductFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.sofyCustomerProductHoldingProductFactory),
/* harmony export */   sofyRequestAddressBuilder: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.sofyRequestAddressBuilder),
/* harmony export */   sofyRequestProductFactory: () => (/* reexport safe */ _lib_models__WEBPACK_IMPORTED_MODULE_7__.sofyRequestProductFactory)
/* harmony export */ });
/* harmony import */ var _lib_constants_sofy_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/constants/sofy.constants */ 70939);
/* harmony import */ var _lib_constants_connect_five_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/constants/connect-five.constants */ 70978);
/* harmony import */ var _lib_enums_ocapi_move_order_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/enums/ocapi-move-order.enum */ 63085);
/* harmony import */ var _lib_enums_flow_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/enums/flow-type.enum */ 21087);
/* harmony import */ var _lib_enums_self_install_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/enums/self-install-type.enum */ 39435);
/* harmony import */ var _lib_enums_service_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/enums/service-type.enum */ 67166);
/* harmony import */ var _lib_mappers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/mappers */ 85253);
/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models */ 92057);
/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services */ 75121);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/interfaces */ 90948);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/utils */ 56145);












/***/ }),

/***/ 70978:
/*!**********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/constants/connect-five.constants.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectFiveConstants: () => (/* binding */ ConnectFiveConstants)
/* harmony export */ });
class ConnectFiveConstants {
  static MESSAGE_GROUP = 'c5-checkout';
  static SOHO_LABEL_APPENDIX = 'tbf';
  static MODULE_NAME = 'CONNECT_FIVE';
  static BIRTH_DATE_MASK = '90/00/0000';
  static ID_CARD_MASK = '900-0000000-00';
  static MINIMUM_SOHO_SIM_TRANSFERS = 1;
}

/***/ }),

/***/ 70939:
/*!**************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/constants/sofy.constants.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAFE_SPOT_PRO: () => (/* binding */ SAFE_SPOT_PRO),
/* harmony export */   SofyPromoType: () => (/* binding */ SofyPromoType)
/* harmony export */ });
var SofyPromoType;
(function (SofyPromoType) {
  SofyPromoType["PROMO_MOBILE"] = "promo_mobile";
  SofyPromoType["PROMO_INTERNET"] = "promo_internet";
})(SofyPromoType || (SofyPromoType = {}));
const SAFE_SPOT_PRO = '36738';

/***/ }),

/***/ 21087:
/*!**********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/enums/flow-type.enum.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowTypeEnum: () => (/* binding */ FlowTypeEnum)
/* harmony export */ });
var FlowTypeEnum;
(function (FlowTypeEnum) {
  FlowTypeEnum["SOHO"] = "soho";
  FlowTypeEnum["RES"] = "res";
})(FlowTypeEnum || (FlowTypeEnum = {}));

/***/ }),

/***/ 63085:
/*!*****************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/enums/ocapi-move-order.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallTypeEnum: () => (/* binding */ InstallTypeEnum)
/* harmony export */ });
var InstallTypeEnum;
(function (InstallTypeEnum) {
  InstallTypeEnum["SELF_INSTALL"] = "selfinstall";
  InstallTypeEnum["PRE_INSTALL"] = "preinstall";
  InstallTypeEnum["COMFORT_INSTALL"] = "comfortinstall";
  InstallTypeEnum["BUSINESS_INSTALL"] = "businessinstall";
  InstallTypeEnum["BUSINESS_INSTALL_SWAP"] = "businessinstall_swap";
})(InstallTypeEnum || (InstallTypeEnum = {}));

/***/ }),

/***/ 39435:
/*!******************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/enums/self-install-type.enum.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfInstallTypeEnum: () => (/* binding */ SelfInstallTypeEnum)
/* harmony export */ });
var SelfInstallTypeEnum;
(function (SelfInstallTypeEnum) {
  SelfInstallTypeEnum["PICKUP"] = "pick_up";
  SelfInstallTypeEnum["HOME_DELIVERY"] = "home_delivery";
})(SelfInstallTypeEnum || (SelfInstallTypeEnum = {}));

/***/ }),

/***/ 67166:
/*!*************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/enums/service-type.enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceTypeEnum: () => (/* binding */ ServiceTypeEnum)
/* harmony export */ });
var ServiceTypeEnum;
(function (ServiceTypeEnum) {
  ServiceTypeEnum["MOBILE_INTERNET"] = "MOBILE_INTERNET";
  ServiceTypeEnum["FIXED_CALLING"] = "FIXED_CALLING";
})(ServiceTypeEnum || (ServiceTypeEnum = {}));

/***/ }),

/***/ 65951:
/*!***************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/cost.interface.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 79745:
/*!**************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/delivery-option.interface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 90948:
/*!******************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cost_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cost.interface */ 65951);
/* harmony import */ var _delivery_option_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-option.interface */ 79745);
/* harmony import */ var _install_type_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install-type.interface */ 39810);
/* harmony import */ var _option_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option.interface */ 75361);
/* harmony import */ var _period_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./period.interface */ 12586);
/* harmony import */ var _product_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.interface */ 36913);
/* harmony import */ var _sales_offer_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales-offer.interface */ 3232);
/* harmony import */ var _installation_details_response_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./installation-details-response.interface */ 70519);









/***/ }),

/***/ 39810:
/*!***********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/install-type.interface.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 70519:
/*!****************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/installation-details-response.interface.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 75361:
/*!*****************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/option.interface.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 12586:
/*!*****************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/period.interface.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 36913:
/*!******************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/product.interface.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3232:
/*!**********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/interfaces/sales-offer.interface.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 61844:
/*!*********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/cost.mapper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CostMapper: () => (/* binding */ CostMapper)
/* harmony export */ });
/* harmony import */ var _promo_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo.mapper */ 90050);
/* harmony import */ var _models_salesOfferCost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/salesOfferCost */ 51609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class CostMapper {
  promoMapper;
  constructor(promoMapper) {
    this.promoMapper = promoMapper;
  }
  map(rawCost) {
    const cost = new _models_salesOfferCost__WEBPACK_IMPORTED_MODULE_1__.SalesOfferCost();
    cost.name = rawCost.name;
    cost.price = rawCost.price;
    cost.priceexclvat = rawCost.priceexclvat;
    cost.recurring = rawCost.recurring;
    cost.promotions = this.mapPromotions(rawCost.promotions);
    return cost;
  }
  mapPromotions(rawPromotions) {
    const promotions = [];
    if (rawPromotions) {
      rawPromotions.forEach(rawPromo => promotions.push(this.promoMapper.map(rawPromo)));
    }
    return promotions;
  }
  static ɵfac = function CostMapper_Factory(t) {
    return new (t || CostMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_promo_mapper__WEBPACK_IMPORTED_MODULE_0__.PromoMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CostMapper,
    factory: CostMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 85253:
/*!***************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CostMapper: () => (/* reexport safe */ _cost_mapper__WEBPACK_IMPORTED_MODULE_0__.CostMapper),
/* harmony export */   InstallTypeMapper: () => (/* reexport safe */ _install_type_mapper__WEBPACK_IMPORTED_MODULE_1__.InstallTypeMapper),
/* harmony export */   OptionMapper: () => (/* reexport safe */ _option_mapper__WEBPACK_IMPORTED_MODULE_2__.OptionMapper),
/* harmony export */   ProductMapper: () => (/* reexport safe */ _product_mapper__WEBPACK_IMPORTED_MODULE_4__.ProductMapper),
/* harmony export */   PromoMapper: () => (/* reexport safe */ _promo_mapper__WEBPACK_IMPORTED_MODULE_3__.PromoMapper),
/* harmony export */   SalesOfferMapper: () => (/* reexport safe */ _sales_offer_mapper__WEBPACK_IMPORTED_MODULE_5__.SalesOfferMapper),
/* harmony export */   SofyCustomerProductHoldingProductMapper: () => (/* reexport safe */ _sofy_customer_product_holding_product_mapper__WEBPACK_IMPORTED_MODULE_6__.SofyCustomerProductHoldingProductMapper),
/* harmony export */   SofyModemDetailsMapper: () => (/* reexport safe */ _sofy_modem_details_mapper__WEBPACK_IMPORTED_MODULE_7__.SofyModemDetailsMapper),
/* harmony export */   SofyProductMapper: () => (/* reexport safe */ _sofy_product_mapper__WEBPACK_IMPORTED_MODULE_8__.SofyProductMapper)
/* harmony export */ });
/* harmony import */ var _cost_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cost.mapper */ 61844);
/* harmony import */ var _install_type_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./install-type.mapper */ 11330);
/* harmony import */ var _option_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option.mapper */ 91830);
/* harmony import */ var _promo_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promo.mapper */ 90050);
/* harmony import */ var _product_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.mapper */ 54015);
/* harmony import */ var _sales_offer_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-offer.mapper */ 18307);
/* harmony import */ var _sofy_customer_product_holding_product_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sofy-customer-product-holding-product.mapper */ 91933);
/* harmony import */ var _sofy_modem_details_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sofy-modem-details.mapper */ 7260);
/* harmony import */ var _sofy_product_mapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sofy-product.mapper */ 18365);










/***/ }),

/***/ 11330:
/*!*****************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/install-type.mapper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallTypeMapper: () => (/* binding */ InstallTypeMapper)
/* harmony export */ });
/* harmony import */ var _promo_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo.mapper */ 90050);
/* harmony import */ var _models_install_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/install-type.model */ 64480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class InstallTypeMapper {
  promoMapper;
  constructor(promoMapper) {
    this.promoMapper = promoMapper;
  }
  map(rawInstallType) {
    const installType = new _models_install_type_model__WEBPACK_IMPORTED_MODULE_1__.InstallTypeModel();
    installType.description = rawInstallType.description;
    installType.mutuallyexclusive = rawInstallType.mutuallyexclusive;
    installType.price = rawInstallType.price;
    installType.priceexclvat = rawInstallType.priceexclvat;
    installType.selected = rawInstallType.selected;
    installType.promos = this.mapPromos(rawInstallType.promos);
    return installType;
  }
  mapPromos(rawPromos) {
    const promos = [];
    if (rawPromos) {
      rawPromos.forEach(rawPromo => promos.push(this.promoMapper.map(rawPromo)));
    }
    return promos;
  }
  static ɵfac = function InstallTypeMapper_Factory(t) {
    return new (t || InstallTypeMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_promo_mapper__WEBPACK_IMPORTED_MODULE_0__.PromoMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InstallTypeMapper,
    factory: InstallTypeMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 91830:
/*!***********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/option.mapper.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionMapper: () => (/* binding */ OptionMapper)
/* harmony export */ });
/* harmony import */ var _promo_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo.mapper */ 90050);
/* harmony import */ var _models_option_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/option.model */ 2021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class OptionMapper {
  promoMapper;
  constructor(promoMapper) {
    this.promoMapper = promoMapper;
  }
  map(rawOption) {
    const option = new _models_option_model__WEBPACK_IMPORTED_MODULE_1__.OptionModel();
    option.description = rawOption.description;
    option.mutuallyExclusive = rawOption.mutuallyExclusive;
    option.omapiId = rawOption.omapiId;
    option.originalprice = rawOption.originalprice;
    option.price = rawOption.price;
    option.priceexclvat = rawOption.priceexclvat;
    option.selected = rawOption.selected;
    option.specUrl = rawOption.specUrl;
    option.promos = this.mapPromos(rawOption.promos);
    return option;
  }
  mapPromos(rawPromos) {
    const promos = [];
    if (rawPromos) {
      rawPromos.forEach(rawPromo => promos.push(this.promoMapper.map(rawPromo)));
    }
    return promos;
  }
  static ɵfac = function OptionMapper_Factory(t) {
    return new (t || OptionMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_promo_mapper__WEBPACK_IMPORTED_MODULE_0__.PromoMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: OptionMapper,
    factory: OptionMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 54015:
/*!************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/product.mapper.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductMapper: () => (/* binding */ ProductMapper)
/* harmony export */ });
/* harmony import */ var _cost_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cost.mapper */ 61844);
/* harmony import */ var _install_type_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./install-type.mapper */ 11330);
/* harmony import */ var _option_mapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option.mapper */ 91830);
/* harmony import */ var _promo_mapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promo.mapper */ 90050);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product.model */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);










class ProductMapper {
  costMapper;
  installTypeMapper;
  optionMapper;
  promoMapper;
  constructor(costMapper, installTypeMapper, optionMapper, promoMapper) {
    this.costMapper = costMapper;
    this.installTypeMapper = installTypeMapper;
    this.optionMapper = optionMapper;
    this.promoMapper = promoMapper;
  }
  map(rawProduct) {
    const product = new _models_product_model__WEBPACK_IMPORTED_MODULE_4__.ProductModel();
    product.correlationId = rawProduct.correlationId;
    product.description = rawProduct.description;
    product.omapiId = rawProduct.omapiid;
    product.price = rawProduct.price;
    product.priceexclvat = rawProduct.priceexclvat;
    product.specUrl = rawProduct.specUrl;
    product.costs = this.mapCosts(rawProduct.costs);
    product.installtypes = this.mapInstallTypes(rawProduct.installtypes);
    product.options = this.mapOptions(rawProduct.options);
    product.promos = this.mapPromos(rawProduct.promos);
    return product;
  }
  mapCosts(rawCosts) {
    const costs = [];
    if (rawCosts) {
      rawCosts.forEach(rawCost => costs.push(this.costMapper.map(rawCost)));
    }
    return costs;
  }
  mapInstallTypes(rawInstallTypes) {
    const installTypes = [];
    if (rawInstallTypes) {
      rawInstallTypes.forEach(rawInstallType => installTypes.push(this.installTypeMapper.map(rawInstallType)));
    }
    return installTypes;
  }
  mapOptions(rawOptions) {
    const options = [];
    if (rawOptions) {
      rawOptions.forEach(rawOption => options.push(this.optionMapper.map(rawOption)));
    }
    return options;
  }
  mapPromos(rawPromos) {
    const promos = [];
    if (rawPromos) {
      rawPromos.forEach(rawPromo => promos.push(this.promoMapper.map(rawPromo)));
    }
    return promos;
  }
  static ɵfac = function ProductMapper_Factory(t) {
    return new (t || ProductMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_cost_mapper__WEBPACK_IMPORTED_MODULE_0__.CostMapper), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_install_type_mapper__WEBPACK_IMPORTED_MODULE_1__.InstallTypeMapper), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_option_mapper__WEBPACK_IMPORTED_MODULE_2__.OptionMapper), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_promo_mapper__WEBPACK_IMPORTED_MODULE_3__.PromoMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductMapper,
    factory: ProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 90050:
/*!**********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/promo.mapper.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromoMapper: () => (/* binding */ PromoMapper)
/* harmony export */ });
/* harmony import */ var _models_promo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/promo.model */ 45711);
/* harmony import */ var _models_period_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/period.model */ 27936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class PromoMapper {
  map(rawPromo) {
    const promo = new _models_promo_model__WEBPACK_IMPORTED_MODULE_0__.PromoModel();
    promo.backendid = rawPromo.backendid;
    promo.duration = rawPromo.duration;
    promo.legalid = rawPromo.legalid;
    promo.name = rawPromo.name;
    promo.price = rawPromo.price;
    promo.priceexclvat = rawPromo.priceexclvat;
    promo.puk = rawPromo.puk;
    promo.period = Object.assign(new _models_period_model__WEBPACK_IMPORTED_MODULE_1__.PeriodModel(), rawPromo.period);
    promo.tags = rawPromo.tags;
    return promo;
  }
  static ɵfac = function PromoMapper_Factory(t) {
    return new (t || PromoMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PromoMapper,
    factory: PromoMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18307:
/*!****************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/sales-offer.mapper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferMapper: () => (/* binding */ SalesOfferMapper)
/* harmony export */ });
/* harmony import */ var _product_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.mapper */ 54015);
/* harmony import */ var _models_sales_offer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sales-offer.model */ 15171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class SalesOfferMapper {
  productMapper;
  constructor(productMapper) {
    this.productMapper = productMapper;
  }
  map(rawSalesOffer) {
    const salesOffer = new _models_sales_offer_model__WEBPACK_IMPORTED_MODULE_1__.SalesOfferModel();
    salesOffer.products = this.mapProducts(rawSalesOffer.products);
    salesOffer.ownedProducts = this.mapProducts(rawSalesOffer.ownedProducts);
    salesOffer.standaloneOptions = this.mapProducts(rawSalesOffer.standaloneOptions);
    return salesOffer;
  }
  mapProducts(rawProducts) {
    const products = [];
    if (rawProducts) {
      rawProducts.forEach(rawProduct => products.push(this.productMapper.map(rawProduct)));
    }
    return products;
  }
  static ɵfac = function SalesOfferMapper_Factory(t) {
    return new (t || SalesOfferMapper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_product_mapper__WEBPACK_IMPORTED_MODULE_0__.ProductMapper));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SalesOfferMapper,
    factory: SalesOfferMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 91933:
/*!******************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/sofy-customer-product-holding-product.mapper.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyCustomerProductHoldingProductMapper: () => (/* binding */ SofyCustomerProductHoldingProductMapper)
/* harmony export */ });
/* harmony import */ var _models_sofy_customer_product_holding_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/sofy-customer-product-holding-product */ 71089);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class SofyCustomerProductHoldingProductMapper {
  mapToSofyCustomerProductHoldingProduct(rawProductHoldings) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(rawProductHoldings, rawProductHolding => {
      const sofyCustomerProductHoldingProduct = new _models_sofy_customer_product_holding_product__WEBPACK_IMPORTED_MODULE_0__.SofyCustomerProductHoldingProduct();
      sofyCustomerProductHoldingProduct.identifier = rawProductHolding.identifier;
      sofyCustomerProductHoldingProduct.specurl = rawProductHolding.specurl;
      sofyCustomerProductHoldingProduct.address = rawProductHolding.address;
      sofyCustomerProductHoldingProduct.products = this.mapToSofyCustomerProductHoldingProduct(rawProductHolding.products);
      sofyCustomerProductHoldingProduct.options = this.mapOptions(rawProductHolding.options);
      return sofyCustomerProductHoldingProduct;
    });
  }
  mapOptions(options) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(options, rawProductHoldingOption => {
      const sofyCustomerProductHoldingOption = new _models_sofy_customer_product_holding_product__WEBPACK_IMPORTED_MODULE_0__.SofyCustomerProductHoldingProduct();
      sofyCustomerProductHoldingOption.specurl = rawProductHoldingOption.specurl;
      return sofyCustomerProductHoldingOption;
    });
  }
  static ɵfac = function SofyCustomerProductHoldingProductMapper_Factory(t) {
    return new (t || SofyCustomerProductHoldingProductMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SofyCustomerProductHoldingProductMapper,
    factory: SofyCustomerProductHoldingProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7260:
/*!***********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/sofy-modem-details.mapper.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyModemDetailsMapper: () => (/* binding */ SofyModemDetailsMapper)
/* harmony export */ });
/* harmony import */ var _models_sofy_modem_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/sofy-modem-details */ 24043);
/* harmony import */ var _models_sofy_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sofy-address */ 48397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class SofyModemDetailsMapper {
  mapSofyModemDetails(modemDetails) {
    const sofyModemDetails = [];
    if (modemDetails) {
      modemDetails.modemDetails.forEach(modemDetail => {
        const sofyModemDetail = new _models_sofy_modem_details__WEBPACK_IMPORTED_MODULE_0__.SofyModemDetails();
        sofyModemDetail.macaddress = modemDetail.macAddress;
        sofyModemDetail.cableroutername = modemDetail.cableRouterName;
        sofyModemDetail.hardware = modemDetail.hardwareType;
        sofyModemDetail.installationaddress = this.mapInstallationAddress(modemDetail.installationAddress);
        sofyModemDetail.internetlineidentifier = modemDetail.internetLineIdentifier;
        sofyModemDetail.modemtype = modemDetail.modemType;
        sofyModemDetails.push(sofyModemDetail);
      });
    }
    return sofyModemDetails;
  }
  mapInstallationAddress(address) {
    const sofyAddress = new _models_sofy_address__WEBPACK_IMPORTED_MODULE_1__.SofyAddress();
    sofyAddress.housenr = address.houseNumber;
    sofyAddress.street = address.street;
    sofyAddress.postalcode = address.postalCode;
    sofyAddress.municipality = address.municipality;
    sofyAddress.addressid = address.addressId;
    sofyAddress.country = address.country;
    return sofyAddress;
  }
  static ɵfac = function SofyModemDetailsMapper_Factory(t) {
    return new (t || SofyModemDetailsMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SofyModemDetailsMapper,
    factory: SofyModemDetailsMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 18365:
/*!*****************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/mappers/sofy-product.mapper.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyProductMapper: () => (/* binding */ SofyProductMapper)
/* harmony export */ });
/* harmony import */ var _models_sofy_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/sofy-product */ 31154);
/* harmony import */ var _models_sofy_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sofy-address */ 48397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class SofyProductMapper {
  mapSelectedProductToSofyProduct(omapiProduct, address, installType) {
    const sofyProducts = [];
    const sofyProduct = new _models_sofy_product__WEBPACK_IMPORTED_MODULE_0__.SofyProduct();
    sofyProduct.omapiid = omapiProduct?.productId;
    sofyProduct.options = [];
    sofyProduct.needscableinstallation = !!installType;
    sofyProduct.installtype = installType;
    sofyProduct.installationaddress = this.mapAddress(address);
    sofyProduct.isnewline = false;
    sofyProduct.move = false;
    sofyProducts.push(sofyProduct);
    return sofyProducts;
  }
  mapAddress(address) {
    const sofyAddress = new _models_sofy_address__WEBPACK_IMPORTED_MODULE_1__.SofyAddress();
    if (address) {
      sofyAddress.addressid = address.addressId;
      sofyAddress.municipality = address.municipality;
      sofyAddress.postalcode = address.postalCode;
      sofyAddress.street = address.street;
      sofyAddress.housenr = address.houseNumber;
    }
    return sofyAddress;
  }
  static ɵfac = function SofyProductMapper_Factory(t) {
    return new (t || SofyProductMapper)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SofyProductMapper,
    factory: SofyProductMapper.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 44874:
/*!**********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/address.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* binding */ Address)
/* harmony export */ });
class Address {
  addressId;
  type;
  houseNumber;
  boxNumber;
  subHouseNumber;
  street;
  streetId;
  postalCode;
  municipality;
  country;
  countryCode;
  floorNumber;
  addressType;
  tinaLocationId;
  plannedMaintenance;
}

/***/ }),

/***/ 2573:
/*!********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/cafe-modem-detail.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeModemDetailModel: () => (/* binding */ CafeModemDetailModel)
/* harmony export */ });
class CafeModemDetailModel {
  macAddress;
  modemType;
  hardwareType;
  cableRouterName;
  internetLineIdentifier;
  installationAddress;
}

/***/ }),

/***/ 47836:
/*!*********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/cafe-modem-details.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeModemDetailsModel: () => (/* binding */ CafeModemDetailsModel)
/* harmony export */ });
class CafeModemDetailsModel {
  modemDetails;
  withModemDetails(modemDetails) {
    this.modemDetails = modemDetails;
    return this;
  }
}

/***/ }),

/***/ 36426:
/*!*****************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/cafe-raw-customerproductholding-option.model.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeRawCustomerproductholdingOptionModel: () => (/* binding */ CafeRawCustomerproductholdingOptionModel)
/* harmony export */ });
class CafeRawCustomerproductholdingOptionModel {
  specurl;
  label;
  rawOmapi;
}

/***/ }),

/***/ 17905:
/*!**********************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/cafe-raw-customerproductholding.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CafeRawCustomerproductholdingModel: () => (/* binding */ CafeRawCustomerproductholdingModel),
/* harmony export */   CafeRawCustomerproductholdingRawomapiModel: () => (/* binding */ CafeRawCustomerproductholdingRawomapiModel),
/* harmony export */   CafeRawCustomerproductholdingRawomapiProductModel: () => (/* binding */ CafeRawCustomerproductholdingRawomapiProductModel)
/* harmony export */ });
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @telenet/ng-lib-omapi */ 64512);
/* harmony import */ var _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__);

class CafeRawCustomerproductholdingModel {
  identifier;
  customerproductid;
  accountnumber;
  label;
  rateclassid;
  rateclassdescription;
  specurl;
  products;
  options;
  address;
  rawOmapi;
  isProductTypeBundle() {
    return _telenet_ng_lib_omapi__WEBPACK_IMPORTED_MODULE_0__.OmapiProductType.BUNDLE === this.rawOmapi?.product?.producttype;
  }
}
class CafeRawCustomerproductholdingRawomapiProductModel {
  product;
}
class CafeRawCustomerproductholdingRawomapiModel {
  productid;
  externalProductCode;
  labelkey;
  visible;
  family;
  salesofferingid;
  producttype;
  weight;
  apps;
  services;
  characteristics;
  customercategories;
  category;
  subcategory;
  localizedcontent;
  shortdescription;
  rates;
  visibilityrules;
  unlimited;
  priceType;
}

/***/ }),

/***/ 92057:
/*!**************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Address: () => (/* reexport safe */ _address_model__WEBPACK_IMPORTED_MODULE_16__.Address),
/* harmony export */   CafeModemDetailModel: () => (/* reexport safe */ _cafe_modem_detail_model__WEBPACK_IMPORTED_MODULE_20__.CafeModemDetailModel),
/* harmony export */   CafeModemDetailsModel: () => (/* reexport safe */ _cafe_modem_details_model__WEBPACK_IMPORTED_MODULE_19__.CafeModemDetailsModel),
/* harmony export */   CafeRawCustomerproductholdingModel: () => (/* reexport safe */ _cafe_raw_customerproductholding_model__WEBPACK_IMPORTED_MODULE_17__.CafeRawCustomerproductholdingModel),
/* harmony export */   CafeRawCustomerproductholdingOptionModel: () => (/* reexport safe */ _cafe_raw_customerproductholding_option_model__WEBPACK_IMPORTED_MODULE_18__.CafeRawCustomerproductholdingOptionModel),
/* harmony export */   CafeRawCustomerproductholdingRawomapiModel: () => (/* reexport safe */ _cafe_raw_customerproductholding_model__WEBPACK_IMPORTED_MODULE_17__.CafeRawCustomerproductholdingRawomapiModel),
/* harmony export */   CafeRawCustomerproductholdingRawomapiProductModel: () => (/* reexport safe */ _cafe_raw_customerproductholding_model__WEBPACK_IMPORTED_MODULE_17__.CafeRawCustomerproductholdingRawomapiProductModel),
/* harmony export */   InstallTypeModel: () => (/* reexport safe */ _install_type_model__WEBPACK_IMPORTED_MODULE_2__.InstallTypeModel),
/* harmony export */   OptionModel: () => (/* reexport safe */ _option_model__WEBPACK_IMPORTED_MODULE_3__.OptionModel),
/* harmony export */   PeriodModel: () => (/* reexport safe */ _period_model__WEBPACK_IMPORTED_MODULE_4__.PeriodModel),
/* harmony export */   ProductModel: () => (/* reexport safe */ _product_model__WEBPACK_IMPORTED_MODULE_5__.ProductModel),
/* harmony export */   PromoModel: () => (/* reexport safe */ _promo_model__WEBPACK_IMPORTED_MODULE_6__.PromoModel),
/* harmony export */   PromoModelTestfactory: () => (/* reexport safe */ _promo_model_testfactory__WEBPACK_IMPORTED_MODULE_7__.PromoModelTestfactory),
/* harmony export */   Promotion: () => (/* reexport safe */ _promotion_model__WEBPACK_IMPORTED_MODULE_15__.Promotion),
/* harmony export */   SalesOfferCost: () => (/* reexport safe */ _salesOfferCost__WEBPACK_IMPORTED_MODULE_9__.SalesOfferCost),
/* harmony export */   SalesOfferModel: () => (/* reexport safe */ _sales_offer_model__WEBPACK_IMPORTED_MODULE_8__.SalesOfferModel),
/* harmony export */   SalesOfferProductType: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.SalesOfferProductType),
/* harmony export */   SalesOfferSetupModelFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.SalesOfferSetupModelFactory),
/* harmony export */   SofyAddress: () => (/* reexport safe */ _sofy_address__WEBPACK_IMPORTED_MODULE_10__.SofyAddress),
/* harmony export */   SofyCustomerProductHoldingProduct: () => (/* reexport safe */ _sofy_customer_product_holding_product__WEBPACK_IMPORTED_MODULE_12__.SofyCustomerProductHoldingProduct),
/* harmony export */   SofyModemDetails: () => (/* reexport safe */ _sofy_modem_details__WEBPACK_IMPORTED_MODULE_13__.SofyModemDetails),
/* harmony export */   SofyProduct: () => (/* reexport safe */ _sofy_product__WEBPACK_IMPORTED_MODULE_14__.SofyProduct),
/* harmony export */   salesOfferCostFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferCostFactory),
/* harmony export */   salesOfferError: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferError),
/* harmony export */   salesOfferProductComfortInstallTypeFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductComfortInstallTypeFactory),
/* harmony export */   salesOfferProductFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductFactory),
/* harmony export */   salesOfferProductOptinFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductOptinFactory),
/* harmony export */   salesOfferProductOptionFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductOptionFactory),
/* harmony export */   salesOfferProductPreInstallTypeFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductPreInstallTypeFactory),
/* harmony export */   salesOfferProductSelfInstallTypeFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductSelfInstallTypeFactory),
/* harmony export */   salesOfferProductStreamingServiceFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferProductStreamingServiceFactory),
/* harmony export */   salesOfferPromoFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferPromoFactory),
/* harmony export */   salesOfferPromoPeriodFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferPromoPeriodFactory),
/* harmony export */   salesOfferStandaloneOptionsFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferStandaloneOptionsFactory),
/* harmony export */   salesOfferTestFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferTestFactory),
/* harmony export */   salesOfferTestStandaloneOptionsFactory: () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_1__.salesOfferTestStandaloneOptionsFactory),
/* harmony export */   sofyAddressFactory: () => (/* reexport safe */ _sofy_customer_product_holding_product_testfactory__WEBPACK_IMPORTED_MODULE_11__.sofyAddressFactory),
/* harmony export */   sofyCustomerProductHoldingProductFactory: () => (/* reexport safe */ _sofy_customer_product_holding_product_testfactory__WEBPACK_IMPORTED_MODULE_11__.sofyCustomerProductHoldingProductFactory),
/* harmony export */   sofyRequestAddressBuilder: () => (/* reexport safe */ _request__WEBPACK_IMPORTED_MODULE_0__.sofyRequestAddressBuilder),
/* harmony export */   sofyRequestProductFactory: () => (/* reexport safe */ _request__WEBPACK_IMPORTED_MODULE_0__.sofyRequestProductFactory)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ 5724);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response */ 37526);
/* harmony import */ var _install_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./install-type.model */ 64480);
/* harmony import */ var _option_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option.model */ 2021);
/* harmony import */ var _period_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./period.model */ 27936);
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product.model */ 53882);
/* harmony import */ var _promo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promo.model */ 45711);
/* harmony import */ var _promo_model_testfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promo.model.testfactory */ 81510);
/* harmony import */ var _sales_offer_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-offer.model */ 15171);
/* harmony import */ var _salesOfferCost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./salesOfferCost */ 51609);
/* harmony import */ var _sofy_address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sofy-address */ 48397);
/* harmony import */ var _sofy_customer_product_holding_product_testfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sofy-customer-product-holding-product.testfactory */ 96967);
/* harmony import */ var _sofy_customer_product_holding_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sofy-customer-product-holding-product */ 71089);
/* harmony import */ var _sofy_modem_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sofy-modem-details */ 24043);
/* harmony import */ var _sofy_product__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sofy-product */ 31154);
/* harmony import */ var _promotion_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./promotion.model */ 44951);
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./address.model */ 44874);
/* harmony import */ var _cafe_raw_customerproductholding_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cafe-raw-customerproductholding.model */ 17905);
/* harmony import */ var _cafe_raw_customerproductholding_option_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cafe-raw-customerproductholding-option.model */ 36426);
/* harmony import */ var _cafe_modem_details_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cafe-modem-details.model */ 47836);
/* harmony import */ var _cafe_modem_detail_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cafe-modem-detail.model */ 2573);






















/***/ }),

/***/ 64480:
/*!***************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/install-type.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallTypeModel: () => (/* binding */ InstallTypeModel)
/* harmony export */ });
class InstallTypeModel {
  description;
  mutuallyexclusive;
  price;
  priceexclvat;
  promos;
  selected;
  options;
  withSelected() {
    this.selected = true;
    return this;
  }
  withDescription(description) {
    this.description = description;
    return this;
  }
  withPrice(price) {
    this.price = price;
    return this;
  }
  isPreInstall() {
    return this.description === 'preinstall';
  }
  isComfortInstall() {
    return this.description === 'comfortinstall';
  }
  isSelfInstall() {
    return this.description === 'selfinstall';
  }
  isModemSwap() {
    return !this.description.includes('_swap');
  }
}

/***/ }),

/***/ 2021:
/*!*********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/option.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionModel: () => (/* binding */ OptionModel)
/* harmony export */ });
class OptionModel {
  description;
  mutuallyExclusive;
  omapiId;
  originalprice;
  price;
  priceexclvat;
  promos;
  selected;
  specUrl;
}

/***/ }),

/***/ 27936:
/*!*********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/period.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeriodModel: () => (/* binding */ PeriodModel)
/* harmony export */ });
class PeriodModel {
  endDate;
  startDate;
}

/***/ }),

/***/ 53882:
/*!**********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/product.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModel: () => (/* binding */ ProductModel)
/* harmony export */ });
class ProductModel {
  correlationId;
  costs;
  description;
  installtypes;
  omapiId;
  options;
  price;
  priceexclvat;
  promos;
  specUrl;
  getMonthlyTotalCost() {
    return this.price;
  }
  hasCompatibleModem() {
    return this.installtypes.length > 0 ? this.installtypes[0].isModemSwap() : true;
  }
}

/***/ }),

/***/ 81510:
/*!********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/promo.model.testfactory.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromoModelTestfactory: () => (/* binding */ PromoModelTestfactory)
/* harmony export */ });
/* harmony import */ var _promo_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promo.model */ 45711);
/* harmony import */ var _period_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./period.model */ 27936);


class PromoModelTestfactory {
  static build(properties) {
    const promo = new _promo_model__WEBPACK_IMPORTED_MODULE_0__.PromoModel();
    promo.backendid = 1;
    promo.duration = 1;
    promo.legalid = 'test-promo';
    promo.name = 'test-promo';
    promo.period = new _period_model__WEBPACK_IMPORTED_MODULE_1__.PeriodModel();
    promo.period.startDate = '2020-01-01';
    promo.period.endDate = '2050-01-01';
    promo.price = 50;
    promo.priceexclvat = 40;
    promo.puk = '123456';
    if (properties) {
      Object.keys(properties).forEach(key => {
        if (properties[key] === null) {
          delete promo[key];
        } else {
          promo[key] = properties[key];
        }
      });
    }
    return promo;
  }
}

/***/ }),

/***/ 45711:
/*!********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/promo.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromoModel: () => (/* binding */ PromoModel)
/* harmony export */ });
class PromoModel {
  backendid;
  duration;
  legalid;
  name;
  period;
  price;
  priceexclvat;
  puk;
  tags;
  getNormalizedName() {
    if (this.name) {
      return this.name.replace(/ /g, '-').replace(/\./g, '-').replace(/[^0-9a-zA-Z_-]/g, '').toLowerCase();
    }
    return '';
  }
  getAbsoluteAmount() {
    return Math.abs(this.price);
  }
}

/***/ }),

/***/ 44951:
/*!************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/promotion.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Promotion: () => (/* binding */ Promotion)
/* harmony export */ });
class Promotion {
  description;
  startdate;
  enddate;
}

/***/ }),

/***/ 5724:
/*!**********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/request/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sofyRequestAddressBuilder: () => (/* reexport safe */ _sofy_request_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.sofyRequestAddressBuilder),
/* harmony export */   sofyRequestProductFactory: () => (/* reexport safe */ _sofy_request_product_testfactory__WEBPACK_IMPORTED_MODULE_2__.sofyRequestProductFactory)
/* harmony export */ });
/* harmony import */ var _sofy_request_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sofy-request-address */ 67336);
/* harmony import */ var _sofy_request_basket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sofy-request-basket */ 87849);
/* harmony import */ var _sofy_request_product_testfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sofy-request-product.testfactory */ 73413);
/* harmony import */ var _sofy_request_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sofy-request-product */ 96549);





/***/ }),

/***/ 67336:
/*!*************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/request/sofy-request-address.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 87849:
/*!************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/request/sofy-request-basket.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73413:
/*!*************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/request/sofy-request-product.testfactory.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sofyRequestAddressBuilder: () => (/* binding */ sofyRequestAddressBuilder),
/* harmony export */   sofyRequestProductFactory: () => (/* binding */ sofyRequestProductFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const sofyRequestAddressBuilder = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  addressid: 'adress-id',
  municipality: 'Merksplas',
  postalcode: '2330',
  street: 'Steenweg op Beerse',
  housenr: '123',
  country: 'Belgie'
});
const sofyRequestProductFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  correlationid: '1',
  omapiid: '568',
  options: [],
  streamingservices: [],
  optinproducts: [],
  installationaddress: sofyRequestAddressBuilder.build()
});

/***/ }),

/***/ 96549:
/*!*************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/request/sofy-request-product.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 37526:
/*!***********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferProductType: () => (/* reexport safe */ _sales_offer_product_model__WEBPACK_IMPORTED_MODULE_1__.SalesOfferProductType),
/* harmony export */   SalesOfferSetupModelFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.SalesOfferSetupModelFactory),
/* harmony export */   salesOfferCostFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferCostFactory),
/* harmony export */   salesOfferError: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferError),
/* harmony export */   salesOfferProductComfortInstallTypeFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductComfortInstallTypeFactory),
/* harmony export */   salesOfferProductFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductFactory),
/* harmony export */   salesOfferProductOptinFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductOptinFactory),
/* harmony export */   salesOfferProductOptionFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductOptionFactory),
/* harmony export */   salesOfferProductPreInstallTypeFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductPreInstallTypeFactory),
/* harmony export */   salesOfferProductSelfInstallTypeFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductSelfInstallTypeFactory),
/* harmony export */   salesOfferProductStreamingServiceFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferProductStreamingServiceFactory),
/* harmony export */   salesOfferPromoFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferPromoFactory),
/* harmony export */   salesOfferPromoPeriodFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferPromoPeriodFactory),
/* harmony export */   salesOfferStandaloneOptionsFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferStandaloneOptionsFactory),
/* harmony export */   salesOfferTestFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferTestFactory),
/* harmony export */   salesOfferTestStandaloneOptionsFactory: () => (/* reexport safe */ _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__.salesOfferTestStandaloneOptionsFactory)
/* harmony export */ });
/* harmony import */ var _sales_offer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-offer.model */ 67785);
/* harmony import */ var _sales_offer_product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-offer-product.model */ 10460);
/* harmony import */ var _sales_offer_product_option_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-offer-product-option.model */ 68331);
/* harmony import */ var _sales_offer_testfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-offer.testfactory */ 14914);
/* harmony import */ var _sales_offer_product_install_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-offer-product-install-type */ 3795);
/* harmony import */ var _sales_offer_priced_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-offer-priced-item.model */ 68708);
/* harmony import */ var _sales_offer_product_optin_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales-offer-product-optin.model */ 59910);
/* harmony import */ var _sales_offer_promo_duration_group_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-offer-promo-duration-group.model */ 2294);
/* harmony import */ var _sales_offer_promo_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-offer-promo.model */ 73783);
/* harmony import */ var _sales_offer_setup_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-offer-setup.model */ 447);
/* harmony import */ var _sales_offer_promo_period_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sales-offer-promo-period.model */ 37839);












/***/ }),

/***/ 68708:
/*!***********************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-priced-item.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3795:
/*!**************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-product-install-type.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 59910:
/*!*************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-product-optin.model.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 68331:
/*!**************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-product-option.model.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 10460:
/*!*******************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-product.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferProductType: () => (/* binding */ SalesOfferProductType)
/* harmony export */ });
var SalesOfferProductType;
(function (SalesOfferProductType) {
  SalesOfferProductType["OPTIONS"] = "options";
  SalesOfferProductType["OPTINS"] = "optinproducts";
  SalesOfferProductType["STREAMING_SERVICES"] = "streamingservices";
})(SalesOfferProductType || (SalesOfferProductType = {}));

/***/ }),

/***/ 2294:
/*!********************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-promo-duration-group.model.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 37839:
/*!************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-promo-period.model.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73783:
/*!*****************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-promo.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 447:
/*!*****************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer-setup.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 67785:
/*!***********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer.model.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 14914:
/*!*****************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/response/sales-offer.testfactory.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferSetupModelFactory: () => (/* binding */ SalesOfferSetupModelFactory),
/* harmony export */   salesOfferCostFactory: () => (/* binding */ salesOfferCostFactory),
/* harmony export */   salesOfferError: () => (/* binding */ salesOfferError),
/* harmony export */   salesOfferProductComfortInstallTypeFactory: () => (/* binding */ salesOfferProductComfortInstallTypeFactory),
/* harmony export */   salesOfferProductFactory: () => (/* binding */ salesOfferProductFactory),
/* harmony export */   salesOfferProductOptinFactory: () => (/* binding */ salesOfferProductOptinFactory),
/* harmony export */   salesOfferProductOptionFactory: () => (/* binding */ salesOfferProductOptionFactory),
/* harmony export */   salesOfferProductPreInstallTypeFactory: () => (/* binding */ salesOfferProductPreInstallTypeFactory),
/* harmony export */   salesOfferProductSelfInstallTypeFactory: () => (/* binding */ salesOfferProductSelfInstallTypeFactory),
/* harmony export */   salesOfferProductStreamingServiceFactory: () => (/* binding */ salesOfferProductStreamingServiceFactory),
/* harmony export */   salesOfferPromoFactory: () => (/* binding */ salesOfferPromoFactory),
/* harmony export */   salesOfferPromoPeriodFactory: () => (/* binding */ salesOfferPromoPeriodFactory),
/* harmony export */   salesOfferStandaloneOptionsFactory: () => (/* binding */ salesOfferStandaloneOptionsFactory),
/* harmony export */   salesOfferTestFactory: () => (/* binding */ salesOfferTestFactory),
/* harmony export */   salesOfferTestStandaloneOptionsFactory: () => (/* binding */ salesOfferTestStandaloneOptionsFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);
/* harmony import */ var _enums_ocapi_move_order_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/ocapi-move-order.enum */ 63085);


const salesOfferPromoPeriodFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  startDate: '12/01/2020',
  endDate: '12/03/2020'
});
const salesOfferPromoFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  backendid: 123,
  duration: 3,
  legalid: 'legal-id',
  name: 'promo-one',
  period: salesOfferPromoPeriodFactory.build(),
  price: -5,
  priceexclvat: -3,
  puk: '1234',
  tags: [],
  legalInformation: undefined
});
const salesOfferProductOptionFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  specurl: 'url/100',
  omapiid: '100',
  mutuallyexclusive: 'none',
  mutuallyexclusivelist: [],
  selected: true,
  description: 'description',
  price: 20,
  priceexclvat: 18,
  originalprice: 15,
  productInfo: {},
  promos: [salesOfferPromoFactory.build()]
});
const salesOfferProductStreamingServiceFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  options: [salesOfferProductOptionFactory.build()],
  specurl: 'url/100',
  omapiid: '100',
  mutuallyexclusive: 'none',
  mutuallyexclusivelist: [],
  selected: true,
  description: 'description',
  price: 20,
  priceexclvat: 18,
  originalprice: 15,
  productInfo: {},
  promos: [salesOfferPromoFactory.build()]
});
const salesOfferProductOptinFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  specurl: 'url/100',
  omapiid: '100',
  mutuallyexclusive: 'none',
  selected: true,
  description: 'description',
  price: 0,
  priceexclvat: 0,
  originalprice: 15,
  productInfo: {
    hasServiceType(_) {
      return false;
    }
  },
  promos: []
});
const SalesOfferSetupModelFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  easyswitcheligible: true
});
const salesOfferProductPreInstallTypeFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  description: _enums_ocapi_move_order_enum__WEBPACK_IMPORTED_MODULE_1__.InstallTypeEnum.PRE_INSTALL,
  price: 0,
  mutuallyexclusive: '',
  priceexclvat: 0,
  selected: false,
  promos: []
});
const salesOfferProductComfortInstallTypeFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  description: _enums_ocapi_move_order_enum__WEBPACK_IMPORTED_MODULE_1__.InstallTypeEnum.COMFORT_INSTALL,
  price: 85,
  mutuallyexclusive: '',
  priceexclvat: 70.25,
  selected: false,
  promos: []
});
const salesOfferProductSelfInstallTypeFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  description: _enums_ocapi_move_order_enum__WEBPACK_IMPORTED_MODULE_1__.InstallTypeEnum.SELF_INSTALL,
  price: 0,
  mutuallyexclusive: '',
  priceexclvat: 0,
  selected: false,
  promos: []
});
const salesOfferCostFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  name: 'cable-installation',
  price: 50,
  priceexclvat: 45,
  promotions: [],
  recurring: 0
});
const salesOfferProductFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  omapiid: '87',
  correlationid: 'id',
  specurl: 'url/123',
  description: 'description',
  price: 100,
  priceexclvat: 89,
  options: [salesOfferProductOptionFactory.build()],
  optinproducts: [salesOfferProductOptinFactory.build()],
  productInfo: {},
  promos: [],
  installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
  costs: [salesOfferCostFactory.build()],
  streamingservices: []
});
const salesOfferStandaloneOptionsFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  omapiid: '100',
  correlationid: 'id',
  specurl: 'url/100',
  description: 'description',
  price: 100,
  priceexclvat: 89,
  options: [],
  optinproducts: [salesOfferProductOptinFactory.build()],
  productInfo: {},
  promos: [salesOfferPromoFactory.build()],
  installtypes: [salesOfferProductComfortInstallTypeFactory.build(), salesOfferProductSelfInstallTypeFactory.build()],
  costs: [salesOfferCostFactory.build()],
  streamingservices: []
});
const salesOfferTestFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  products: [salesOfferProductFactory.build()],
  setup: SalesOfferSetupModelFactory.build(),
  standaloneoptions: []
});
const salesOfferTestStandaloneOptionsFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  products: [],
  setup: SalesOfferSetupModelFactory.build(),
  standaloneoptions: [salesOfferStandaloneOptionsFactory.build()]
});
const salesOfferError = {
  error: {
    type: 'error'
  }
};

/***/ }),

/***/ 15171:
/*!**************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/sales-offer.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferModel: () => (/* binding */ SalesOfferModel)
/* harmony export */ });
class SalesOfferModel {
  products;
  standaloneOptions;
  ownedProducts;
}

/***/ }),

/***/ 51609:
/*!***********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/salesOfferCost.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferCost: () => (/* binding */ SalesOfferCost)
/* harmony export */ });
class SalesOfferCost {
  name;
  price;
  priceexclvat;
  promotions;
  recurring;
}

/***/ }),

/***/ 48397:
/*!*********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/sofy-address.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyAddress: () => (/* binding */ SofyAddress)
/* harmony export */ });
class SofyAddress {
  addressid;
  municipality;
  postalcode;
  street;
  housenr;
  country;
}

/***/ }),

/***/ 96967:
/*!**********************************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/sofy-customer-product-holding-product.testfactory.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sofyAddressFactory: () => (/* binding */ sofyAddressFactory),
/* harmony export */   sofyCustomerProductHoldingProductFactory: () => (/* binding */ sofyCustomerProductHoldingProductFactory)
/* harmony export */ });
/* harmony import */ var factory_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! factory.ts */ 46032);

const sofyAddressFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  addressid: 'adress-id',
  municipality: 'Merksplas',
  postalcode: '2330',
  street: 'Steenweg op Beerse',
  housenr: '123',
  country: 'Belgie'
});
const sofyCustomerProductHoldingProductFactory = factory_ts__WEBPACK_IMPORTED_MODULE_0__.Sync.makeFactory({
  specurl: '568',
  address: sofyAddressFactory.build(),
  identifier: '123',
  products: [],
  options: []
});

/***/ }),

/***/ 71089:
/*!**********************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/sofy-customer-product-holding-product.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyCustomerProductHoldingProduct: () => (/* binding */ SofyCustomerProductHoldingProduct)
/* harmony export */ });
class SofyCustomerProductHoldingProduct {
  specurl;
  address;
  identifier;
  products;
  options;
}

/***/ }),

/***/ 24043:
/*!***************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/sofy-modem-details.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyModemDetails: () => (/* binding */ SofyModemDetails)
/* harmony export */ });
class SofyModemDetails {
  macaddress;
  modemtype;
  hardware;
  cableroutername;
  internetlineidentifier;
  installationaddress;
}

/***/ }),

/***/ 31154:
/*!*********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/models/sofy-product.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyProduct: () => (/* binding */ SofyProduct)
/* harmony export */ });
class SofyProduct {
  omapiid;
  options;
  isnewline;
  installationaddress;
  move;
  needscableinstallation;
  installtype;
}

/***/ }),

/***/ 75121:
/*!****************************************************!*\
  !*** ./libs/shared/sofy/src/lib/services/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyService: () => (/* reexport safe */ _sofy_service__WEBPACK_IMPORTED_MODULE_0__.SofyService)
/* harmony export */ });
/* harmony import */ var _sofy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sofy.service */ 84512);


/***/ }),

/***/ 84512:
/*!***********************************************************!*\
  !*** ./libs/shared/sofy/src/lib/services/sofy.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SofyService: () => (/* binding */ SofyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 44946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 37934);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @telenet/ng-lib-config */ 81601);
/* harmony import */ var _telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 41855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);










class SofyService {
  http;
  urlService;
  configService;
  pathCategorisationService;
  PARAM_DATE = 'date';
  constructor(http, urlService, configService, pathCategorisationService) {
    this.http = http;
    this.urlService = urlService;
    this.configService = configService;
    this.pathCategorisationService = pathCategorisationService;
  }
  // Deprecated,
  // products model is the same as the one used in the response
  // makes no sense to have the exact same model as it's just not the same
  // Use getSalesOffer instead
  sofyProducts(products, rawCustomerProductHolding, targetGroups, rawModemDetails, voucherPromo, campaignCode, messageGroup) {
    const data = {
      products: products,
      promotions: targetGroups,
      customerproductholding: rawCustomerProductHolding,
      modemdetails: rawModemDetails,
      voucherpromo: voucherPromo,
      campaigncode: campaignCode
    };
    return this.doPost(data, messageGroup);
  }
  getSalesOfferWithOmapiId(products, messageGroup) {
    const data = {
      products: products,
      promotions: [],
      customerproductholding: [],
      modemdetails: []
    };
    return this.doPost(data, messageGroup);
  }
  getSalesOffer(products, promotions, rawModemDetails, rawCustomerProductHolding, voucherPromo, campaignCode, messageGroup, installationDetails, standaloneOptions) {
    const data = {
      promotions: promotions,
      customerproductholding: rawCustomerProductHolding,
      modemdetails: rawModemDetails,
      voucherpromo: voucherPromo,
      campaigncode: campaignCode,
      customerinstallationdetails: installationDetails,
      products: products,
      standaloneoptions: standaloneOptions
    };
    if (!(0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])(this.getDateFromUrl())) {
      data['salesofferdate'] = this.getDateFromUrl();
    }
    return this.doPost(data, messageGroup);
  }
  doPost(data, _) {
    const options = this.getHttpOptions();
    return this.http.post(this.getSofyUrl(), data, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(error);
    }));
  }
  getHttpOptions() {
    return {
      headers: this.createHttpHeaders(),
      timeout: 10000,
      cache: true
    };
  }
  createHttpHeaders() {
    return {
      'x-alt-referer': this.urlService.getCurrentUrl(),
      'X-Requested-With': 'XMLHttpRequest'
    };
  }
  getSofyUrl() {
    if (this.isBaseCustomer()) {
      return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__.ConfigConstants.SOFY_URL) + '/sofy/base/public/';
    }
    return this.configService.getConfig(_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__.ConfigConstants.SOFY_URL) + '/sofy/public/';
  }
  isBaseCustomer() {
    return this.pathCategorisationService.getCustomerBrand() === _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.CustomerBrandEnum.BRAND_BASE;
  }
  getDateFromUrl() {
    return this.urlService.getRequestParamValue(this.PARAM_DATE, '');
  }
  static ɵfac = function SofyService_Factory(t) {
    return new (t || SofyService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_config__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_3__.PathCategorisationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: SofyService,
    factory: SofyService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 87206:
/*!**********************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/connect-five-price-from-flow-type.util.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectFivePriceFromFlowTypeUtil: () => (/* binding */ ConnectFivePriceFromFlowTypeUtil)
/* harmony export */ });
/* harmony import */ var _enums_flow_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/flow-type.enum */ 21087);

class ConnectFivePriceFromFlowTypeUtil {
  static connectFivePriceWithFlowTypeConsidered(flowType, objectContainingPriceWithVatAndPriceWithoutVat) {
    if (flowType === _enums_flow_type_enum__WEBPACK_IMPORTED_MODULE_0__.FlowTypeEnum.SOHO) {
      return objectContainingPriceWithVatAndPriceWithoutVat.priceexclvat;
    } else {
      return objectContainingPriceWithVatAndPriceWithoutVat.price;
    }
  }
}

/***/ }),

/***/ 56145:
/*!*************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferInstallTypeUtil: () => (/* reexport safe */ _sales_offer_install_type_util__WEBPACK_IMPORTED_MODULE_1__.SalesOfferInstallTypeUtil),
/* harmony export */   SalesOfferProductOptinUtil: () => (/* reexport safe */ _sales_offer_product_optin_util__WEBPACK_IMPORTED_MODULE_2__.SalesOfferProductOptinUtil),
/* harmony export */   SalesOfferProductUtil: () => (/* reexport safe */ _sales_offer_product_util__WEBPACK_IMPORTED_MODULE_3__.SalesOfferProductUtil),
/* harmony export */   SalesOfferPromoUtil: () => (/* reexport safe */ _sales_offer_promo_util__WEBPACK_IMPORTED_MODULE_4__.SalesOfferPromoUtil),
/* harmony export */   SalesOfferUtil: () => (/* reexport safe */ _sales_offer_util__WEBPACK_IMPORTED_MODULE_0__.SalesOfferUtil)
/* harmony export */ });
/* harmony import */ var _sales_offer_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-offer.util */ 85553);
/* harmony import */ var _sales_offer_install_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-offer-install-type.util */ 94713);
/* harmony import */ var _sales_offer_product_optin_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sales-offer-product-optin.util */ 93268);
/* harmony import */ var _sales_offer_product_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-offer-product.util */ 64370);
/* harmony import */ var _sales_offer_promo_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-offer-promo.util */ 66545);






/***/ }),

/***/ 94713:
/*!*************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/sales-offer-install-type.util.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferInstallTypeUtil: () => (/* binding */ SalesOfferInstallTypeUtil)
/* harmony export */ });
/* harmony import */ var _enums_self_install_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/self-install-type.enum */ 39435);
/* harmony import */ var _connect_five_price_from_flow_type_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect-five-price-from-flow-type.util */ 87206);


class SalesOfferInstallTypeUtil {
  static getInstallType(type, installTypes) {
    return installTypes.find(installType => installType.description === type);
  }
  static getInstallTypeForFlowType(type, installTypes, flowType) {
    const foundInstallType = this.getInstallType(type, installTypes);
    if (typeof foundInstallType === 'undefined') {
      return undefined;
    }
    const installType = JSON.parse(JSON.stringify(foundInstallType));
    installType.price = _connect_five_price_from_flow_type_util__WEBPACK_IMPORTED_MODULE_1__.ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(flowType, installType);
    installType.promos.forEach(promo => promo.price = _connect_five_price_from_flow_type_util__WEBPACK_IMPORTED_MODULE_1__.ConnectFivePriceFromFlowTypeUtil.connectFivePriceWithFlowTypeConsidered(flowType, promo));
    return installType;
  }
  static getDeliveryOption(type, installType) {
    return installType?.options ? installType.options.find(installTypeOption => installTypeOption?.description === type) : undefined;
  }
  static hasHomeDelivery(installType) {
    return !!installType.options?.some(installTypeOption => installTypeOption?.description === _enums_self_install_type_enum__WEBPACK_IMPORTED_MODULE_0__.SelfInstallTypeEnum.HOME_DELIVERY);
  }
  static hasPickup(installType) {
    return !!installType.options?.some(installTypeOption => installTypeOption?.description === _enums_self_install_type_enum__WEBPACK_IMPORTED_MODULE_0__.SelfInstallTypeEnum.PICKUP);
  }
}

/***/ }),

/***/ 93268:
/*!**************************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/sales-offer-product-optin.util.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferProductOptinUtil: () => (/* binding */ SalesOfferProductOptinUtil)
/* harmony export */ });
/* harmony import */ var _enums_service_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/service-type.enum */ 67166);

class SalesOfferProductOptinUtil {
  static hasMobileInternetOptin(optins) {
    return SalesOfferProductOptinUtil.hasOptinWithServiceType(optins, _enums_service_type_enum__WEBPACK_IMPORTED_MODULE_0__.ServiceTypeEnum.MOBILE_INTERNET);
  }
  static hasOptinWithServiceType(optins, serviceType) {
    return optins && optins.some(optin => optin.productInfo && optin.productInfo.hasServiceType(serviceType));
  }
}

/***/ }),

/***/ 64370:
/*!********************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/sales-offer-product.util.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferProductUtil: () => (/* binding */ SalesOfferProductUtil)
/* harmony export */ });
class SalesOfferProductUtil {
  static RMD_PRODUCT = 'RMD';
  static SOHO_PRODUCT = 'TB';
  static isResidentialProduct(product) {
    return product.productInfo?.getCharacteristic('productSegment') === SalesOfferProductUtil.RMD_PRODUCT;
  }
  static isSohoProduct(product) {
    return product.productInfo?.getCharacteristic('productSegment') === SalesOfferProductUtil.SOHO_PRODUCT;
  }
  static hasAnyInstallTypes(product) {
    return product.installtypes && product.installtypes.length > 0;
  }
}

/***/ }),

/***/ 66545:
/*!******************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/sales-offer-promo.util.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferPromoUtil: () => (/* binding */ SalesOfferPromoUtil)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ 57541);
/* harmony import */ var _constants_connect_five_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/connect-five.constants */ 70978);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @telenet/ng-lib-page */ 21784);
/* harmony import */ var _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__);



class SalesOfferPromoUtil {
  static PROMOTION_DICTIONARY = 'promotions';
  static DEFAULT_LABEL = 'default';
  static DEFAULT_PERMANENT_LABEL = 'default-permanent';
  static containsTag(promo, tag) {
    return promo.some(promo => promo.tags.some(promoTag => promoTag === tag));
  }
  static hasDiscount(promo) {
    return promo && promo.duration > 0 && promo.price < 0;
  }
  static getShortestPromoExcludingZeroDurations(promos) {
    const nonZeroDurationPromos = promos.filter(promo => promo.duration > 0);
    return nonZeroDurationPromos.length === 0 ? undefined : nonZeroDurationPromos.reduce((prev, curr) => prev.duration < curr.duration ? prev : curr);
  }
  static getPromoWithZeroDurationAndZeroDiscount(promos) {
    return promos.find(promo => promo.duration === 0 && promo.price === 0);
  }
  static getTotalDiscountWithZeroDuration(promos, sohoFlow) {
    return promos.filter(promo => promo.duration === 0).map(promo => sohoFlow ? promo.priceexclvat : promo.price).reduce((curr, prev) => curr + prev, 0);
  }
  static getOverviewLabel(promo, product, translateService, isSoho, discount) {
    const labelKey = SalesOfferPromoUtil.getLabelKey([SalesOfferPromoUtil.PROMOTION_DICTIONARY, _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LabelUtil.normalizeKey(promo.name)], isSoho);
    const params = {
      amount: this.transformPrice(discount),
      product: product,
      duration: promo.duration
    };
    let copy = translateService.instant(labelKey, params);
    if (copy === undefined || copy === null || copy === '' || copy === labelKey) {
      copy = this.getDefaultCopy(promo, isSoho, translateService, params, labelKey);
    }
    return copy;
  }
  static getDefaultCopy(promo, isSoho, translateService, params, labelKey) {
    const defaultKeyWord = SalesOfferPromoUtil.isPermanentPromotion(promo) ? SalesOfferPromoUtil.DEFAULT_PERMANENT_LABEL : SalesOfferPromoUtil.DEFAULT_LABEL;
    const defaultLabelKey = SalesOfferPromoUtil.getLabelKey([SalesOfferPromoUtil.PROMOTION_DICTIONARY, defaultKeyWord], isSoho);
    let copy = translateService.instant(defaultLabelKey, params);
    if (copy === undefined || copy === null || copy === '' || copy === defaultLabelKey) {
      copy = labelKey;
    }
    return copy;
  }
  static getLabelKey(keyWords, isSoho) {
    if (isSoho) {
      keyWords.push(_constants_connect_five_constants__WEBPACK_IMPORTED_MODULE_0__.ConnectFiveConstants.SOHO_LABEL_APPENDIX);
    }
    return _telenet_ng_lib_page__WEBPACK_IMPORTED_MODULE_1__.LabelUtil.getLabelKeyWithTypeText(keyWords.join('.'));
  }
  static isPermanentPromotion(promo) {
    return promo.duration === 0 && promo.price < 0;
  }
  static transformPrice(price) {
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_2__["default"])(price) ? price.toFixed(2).replace('.', ',') : '';
  }
}

/***/ }),

/***/ 85553:
/*!************************************************************!*\
  !*** ./libs/shared/sofy/src/lib/utils/sales-offer.util.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesOfferUtil: () => (/* binding */ SalesOfferUtil)
/* harmony export */ });
/* harmony import */ var _sales_offer_product_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-offer-product.util */ 64370);
/* harmony import */ var _constants_sofy_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/sofy.constants */ 70939);
/* harmony import */ var _models_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/response */ 37526);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 26386);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es */ 39990);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash-es */ 5446);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash-es */ 28864);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ 3715);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash-es */ 30144);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash-es */ 32984);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es */ 20408);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash-es */ 47256);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash-es */ 11407);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash-es */ 85161);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash-es */ 10153);
/* harmony import */ var _sales_offer_promo_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-offer-promo.util */ 66545);





class SalesOfferUtil {
  static getTotalMonthlyPrice(offer, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])([SalesOfferUtil.getMonthlyPriceForProducts(offer, exclusiveVat), SalesOfferUtil.getMonthlyPriceForSelectedProductOptions(offer, exclusiveVat), SalesOfferUtil.getMonthlyPriceForStandaloneOptions(offer, exclusiveVat)]);
  }
  static getTotalMonthlyPriceInclPromos(offer, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])([this.getTotalMonthlyPrice(offer, exclusiveVat), this.getTotalMonthlyPromoPrice(offer, exclusiveVat)]);
  }
  static getSafeSpotProOption(offer) {
    const allSelectedProductOptions = SalesOfferUtil.getAllSelectedProductOptions(offer);
    return allSelectedProductOptions.find(option => option.omapiid === _constants_sofy_constants__WEBPACK_IMPORTED_MODULE_1__.SAFE_SPOT_PRO);
  }
  static getAllSelectedProductOptions(offer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getAllProductOptions(offer), o => o.selected);
  }
  static getAllProductOptions(offer) {
    if (offer === undefined) {
      return [];
    }
    return SalesOfferUtil.getAllProductItemsByType(offer, _models_response__WEBPACK_IMPORTED_MODULE_2__.SalesOfferProductType.OPTIONS);
  }
  static getAllSelectedProductStreamingServices(offer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getAllProductStreamingServices(offer), o => o.selected);
  }
  static getAllProductStreamingServices(offer) {
    if (offer === undefined) {
      return [];
    }
    return SalesOfferUtil.getAllProductItemsByType(offer, _models_response__WEBPACK_IMPORTED_MODULE_2__.SalesOfferProductType.STREAMING_SERVICES);
  }
  static getAllSelectedProductOptins(offer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__["default"])(this.getAllProductOptins(offer), o => o.selected);
  }
  static getAllProductOptins(offer) {
    if (offer === undefined) {
      return [];
    }
    return SalesOfferUtil.getAllProductItemsByType(offer, _models_response__WEBPACK_IMPORTED_MODULE_2__.SalesOfferProductType.OPTINS);
  }
  static getAllProductItemsByType(offer, type) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_6__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_7__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(offer.products, product => product[type])), o => o.omapiid);
  }
  static getMonthlyPriceForSelectedProductOptions(offer, exclusiveVat) {
    const allSelectedProductOptions = SalesOfferUtil.getAllSelectedProductOptions(offer);
    return SalesOfferUtil.getMonthlyPriceForItems(allSelectedProductOptions, !!exclusiveVat) + SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(allSelectedProductOptions, !!exclusiveVat);
  }
  static getMonthlyPriceForProducts(offer, exclusiveVat) {
    return SalesOfferUtil.getMonthlyPriceForItems(offer.products, !!exclusiveVat) + SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(offer.products, !!exclusiveVat);
  }
  static getMonthlyPriceForStandaloneOptions(offer, exclusiveVat) {
    return SalesOfferUtil.getMonthlyPriceForItems(offer.standaloneoptions, !!exclusiveVat) + SalesOfferUtil.getMonthlyPermanentPromoDiscountForItems(offer.standaloneoptions, !!exclusiveVat);
  }
  static getMonthlyPromosForSelectedProductOptions(offer, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(SalesOfferUtil.getMonthlyPromotions(SalesOfferUtil.getAllSelectedProductOptions(offer)), p => exclusiveVat ? p.priceexclvat : p.price));
  }
  static getMonthlyPromosForProducts(offer, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(SalesOfferUtil.getMonthlyPromotions(offer.products), p => exclusiveVat ? p.priceexclvat : p.price));
  }
  static getMonthlyPromosForStandaloneOptions(offer, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(SalesOfferUtil.getMonthlyPromotions(offer.standaloneoptions), p => exclusiveVat ? p.priceexclvat : p.price));
  }
  static getMonthlyPromos(offer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(offer.products, product => SalesOfferUtil.getMonthlyProductPromos(product));
  }
  static getAllPromos(offer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(SalesOfferUtil.getMonthlyPromos(offer), (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(offer.products, product => SalesOfferUtil.getCostPromos(product)), (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(offer.products, product => SalesOfferUtil.getInstallPromos(product)));
  }
  static findProduct(offer, omapiId) {
    return offer && offer.products ? offer.products.find(product => product.omapiid === omapiId) : undefined;
  }
  static getCostPromos(product) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(product.costs, cost => cost.promotions);
  }
  static getInstallPromos(product) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(product.installtypes.filter(installType => installType.selected), installType => installType.promos);
  }
  static getMonthlyProductPromos(product) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_10__["default"])(product.promos, (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(product.optinproducts, optin => optin.promos), (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(product.options.filter(option => option.selected), option => option.promos));
  }
  static getMonthlyPromosGroupedByDuration(offer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"])(SalesOfferUtil.getMonthlyPromos(offer).filter(promo => promo.duration > 0), promo => promo.duration), (promos, key) => {
      return {
        duration: Number(key),
        promos: promos
      };
    });
  }
  static getPromoDurationGroupsTotal(salesOfferPromoGroups, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(salesOfferPromoGroups, group => group.promos), promo => exclusiveVat ? promo.priceexclvat : promo.price));
  }
  static getBundle(offer) {
    const bundle = offer.products.find(product => {
      return product.productInfo && product.productInfo.isBundle();
    });
    if (!bundle) {
      throw new Error('Salesoffer does not contain a bundle');
    }
    return bundle;
  }
  static containsResidentialProduct(offer) {
    return offer.products.some(product => _sales_offer_product_util__WEBPACK_IMPORTED_MODULE_0__.SalesOfferProductUtil.isResidentialProduct(product));
  }
  static containsSohoProduct(offer) {
    return offer.products.some(product => _sales_offer_product_util__WEBPACK_IMPORTED_MODULE_0__.SalesOfferProductUtil.isSohoProduct(product));
  }
  static containsPromoTag(offer, tag) {
    return _sales_offer_promo_util__WEBPACK_IMPORTED_MODULE_3__.SalesOfferPromoUtil.containsTag(offer.promos, tag);
  }
  static getMonthlyPriceForItems(items, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(items, p => exclusiveVat ? p.priceexclvat : p.price));
  }
  static getMonthlyPermanentPromoDiscountForItems(items, exclusiveVat) {
    return SalesOfferUtil.getPermanentPromotions(items).map(promo => SalesOfferUtil.getPrice(promo, exclusiveVat)).reduce((curr, previous) => curr + previous, 0);
  }
  static getPermanentPromotions(items) {
    return SalesOfferUtil.getPromotionsWithDuration(items, promo => promo?.duration === 0);
  }
  static getMonthlyPromotions(items) {
    return SalesOfferUtil.getPromotionsWithDuration(items, promo => promo?.duration > 0);
  }
  static getPromotionsWithDuration(items, durationFilter) {
    return (items || []).map(item => item.promos).reduce((accumulator, value) => accumulator.concat(value), []).filter(durationFilter);
  }
  static getShortestDurationOfAllPromos(salesOffer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])([this.getShortestPromoDurationOfProducts(salesOffer), this.getShortestPromoDurationOfProductOptions(salesOffer), this.getShortestPromoDurationOfStandaloneOptions(salesOffer)]);
  }
  static getPriceInclPromo(salesOfferProduct, business) {
    return this.getPrice(salesOfferProduct, business) + (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(salesOfferProduct.promos, this.getPriceTag(business));
  }
  static getTotalTemporaryDiscount(salesOfferProduct, business) {
    const temporaryPromos = salesOfferProduct.promos.filter(promo => promo.duration !== 0);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__["default"])(temporaryPromos, this.getPriceTag(business));
  }
  static getShortestPromoDuration(salesOfferProduct) {
    return this.calculateShortestPromoDuration(salesOfferProduct.promos);
  }
  static getTotalMonthlyPromoPrice(offer, exclusiveVat) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])([SalesOfferUtil.getMonthlyPromosForProducts(offer, exclusiveVat), SalesOfferUtil.getMonthlyPromosForSelectedProductOptions(offer, exclusiveVat), SalesOfferUtil.getMonthlyPromosForStandaloneOptions(offer, exclusiveVat)]);
  }
  static getPrice(salesOfferProduct, business) {
    return business ? salesOfferProduct.priceexclvat : salesOfferProduct.price;
  }
  static getPriceTag(business) {
    return business ? 'priceexclvat' : 'price';
  }
  static calculateShortestPromoDuration(salesOfferPromos) {
    const shortestDurationPromo = (0,lodash_es__WEBPACK_IMPORTED_MODULE_14__["default"])(salesOfferPromos, 'duration');
    return !(0,lodash_es__WEBPACK_IMPORTED_MODULE_15__["default"])(shortestDurationPromo) ? shortestDurationPromo.duration : 0;
  }
  static getShortestPromoDurationOfProducts(salesOffer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(SalesOfferUtil.getMonthlyPromotions(salesOffer.products), promo => promo.duration));
  }
  static getShortestPromoDurationOfStandaloneOptions(salesOffer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(SalesOfferUtil.getMonthlyPromotions(salesOffer.standaloneoptions), promo => promo.duration));
  }
  static getShortestPromoDurationOfProductOptions(salesOffer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__["default"])((0,lodash_es__WEBPACK_IMPORTED_MODULE_8__["default"])(SalesOfferUtil.getMonthlyPromotions(this.getAllSelectedProductOptions(salesOffer)), promo => promo.duration));
  }
  static getCosts(salesOffer, nameFilter = null) {
    const flat = (someFunction, arr) => arr.reduce((salesOfferCosts, salesOfferProduct) => [...salesOfferCosts, ...someFunction(salesOfferProduct)], []);
    const costs = flat(product => {
      if (product.costs) {
        return product.costs;
      } else {
        return [];
      }
    }, salesOffer.products);
    if (nameFilter) {
      return costs.filter(cost => cost.name === nameFilter);
    }
    return costs;
  }
  static getInstallTypes(salesOffer) {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_9__["default"])(salesOffer.products, product => product.installtypes);
  }
  static isOrderingHighTier(salesOffer) {
    return salesOffer.products.some(product => {
      return product.productInfo && product.productInfo.isHighTier();
    });
  }
  static containsAll(offer, omapiIds) {
    return omapiIds.every(omapiId => this.contains(offer, omapiId));
  }
  static containsAny(offer, omapiIds) {
    return omapiIds.some(omapiId => this.contains(offer, omapiId));
  }
  static contains(offer, omapiId) {
    return offer.products.some(product => product.omapiid === omapiId);
  }
}

/***/ }),

/***/ 88851:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_arrayAggregator.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrayAggregator);

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

/***/ 44987:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseAggregator.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ 59121);


/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function (value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAggregator);

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

/***/ 50194:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseExtremum.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ 67380);


/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
    length = array.length;
  while (++index < length) {
    var value = array[index],
      current = iteratee(value);
    if (current != null && (computed === undefined ? current === current && !(0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(current) : comparator(current, computed))) {
      var computed = current,
        result = value;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseExtremum);

/***/ }),

/***/ 57295:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseFilter.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ 59121);


/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  (0,_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFilter);

/***/ }),

/***/ 24150:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseFindIndex.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
    index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseFindIndex);

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

/***/ 79994:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_baseIndexOf.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseFindIndex.js */ 24150);
/* harmony import */ var _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIsNaN.js */ 33085);
/* harmony import */ var _strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_strictIndexOf.js */ 69343);




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value ? (0,_strictIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, value, fromIndex) : (0,_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, _baseIsNaN_js__WEBPACK_IMPORTED_MODULE_2__["default"], fromIndex);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIndexOf);

/***/ }),

/***/ 33085:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNaN.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseIsNaN);

/***/ }),

/***/ 71463:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_baseLt.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseLt);

/***/ }),

/***/ 72578:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseSum.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
    index = -1,
    length = array.length;
  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseSum);

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

/***/ 40351:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_createAggregator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayAggregator.js */ 88851);
/* harmony import */ var _baseAggregator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseAggregator.js */ 44987);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function (collection, iteratee) {
    var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseAggregator_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      accumulator = initializer ? initializer() : {};
    return func(collection, setter, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 2), accumulator);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAggregator);

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

/***/ 69343:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_strictIndexOf.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
    length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strictIndexOf);

/***/ }),

/***/ 32984:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/concat.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ 11191);
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseFlatten.js */ 78607);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_copyArray.js */ 54196);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
    array = arguments[0],
    index = length;
  while (index--) {
    args[index - 1] = arguments[index];
  }
  return (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array) ? (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(array) : [array], (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_3__["default"])(args, 1));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (concat);

/***/ }),

/***/ 39990:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/filter.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayFilter.js */ 74423);
/* harmony import */ var _baseFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseFilter.js */ 57295);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ 66328);





/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection) ? _arrayFilter_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _baseFilter_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  return func(collection, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(predicate, 3));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

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

/***/ 28864:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/flatten.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFlatten.js */ 78607);


/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? (0,_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, 1) : [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatten);

/***/ }),

/***/ 20408:
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/groupBy.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);
/* harmony import */ var _createAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAggregator.js */ 40351);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = (0,_createAggregator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, key, [value]);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (groupBy);

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

/***/ 10153:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isUndefined.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isUndefined);

/***/ }),

/***/ 47256:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/min.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseExtremum.js */ 50194);
/* harmony import */ var _baseLt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseLt.js */ 71463);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ 25416);




/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return array && array.length ? (0,_baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"], _baseLt_js__WEBPACK_IMPORTED_MODULE_2__["default"]) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (min);

/***/ }),

/***/ 85161:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/minBy.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseExtremum.js */ 50194);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseLt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseLt.js */ 71463);




/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return array && array.length ? (0,_baseExtremum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 2), _baseLt_js__WEBPACK_IMPORTED_MODULE_2__["default"]) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (minBy);

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

/***/ 26386:
/*!***************************************!*\
  !*** ./node_modules/lodash-es/sum.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSum.js */ 72578);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ 25416);



/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return array && array.length ? (0,_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);

/***/ }),

/***/ 11407:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/sumBy.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSum.js */ 72578);



/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return array && array.length ? (0,_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 2)) : 0;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sumBy);

/***/ }),

/***/ 5446:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/uniqBy.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ 34018);
/* harmony import */ var _baseUniq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseUniq.js */ 84560);



/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return array && array.length ? (0,_baseUniq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, (0,_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iteratee, 2)) : [];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uniqBy);

/***/ })

}])
//# sourceMappingURL=libs_shared_sofy_src_index_ts-_53200.js.map